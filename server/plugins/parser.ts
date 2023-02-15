import request from "request";
import cheerio from "cheerio";

import Mercury from "@postlight/mercury-parser";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

import { Parser } from "~/server/models/parser.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";

import * as fs from "fs";

const urlPattern = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // validate fragment locator

export default defineNitroPlugin(async () => {
  try {
    setInterval(async () => {
      console.log("Parsing cycle started...");
      parseArticles(await Parser.find({ status: true }));
    }, 1000 * 60 * 30);
  } catch (error) {
    console.error(error);
  }
});

/**
 * Function parse articles from resources with 'active' status
 *
 * @param resources
 */
async function parseArticles(resources: Array<any>) {
  if (resources.length === 0) return;

  for (const resource of resources) {
    const links = await getLinks(resource);

    // Changing parser last check dateTime
    await Parser.findByIdAndUpdate(resource.id, {
      lastCheck: Date.now(),
    });

    for (const link of links) {
      const data = await Mercury.parse(link);

      const doc = new JSDOM(data.content, {
        url: link,
      });

      const readableContent = new Readability(doc.window.document).parse();

      if (await ParsedArticle.exists({ link: data.url })) continue;

      await ParsedArticle.create({
        parserId: resource.id,
        title: data.title,
        content: readableContent.textContent,
        excerpt: data.excerpt || "",
        date: data.date_published,
        link: data.url,
      });
    }
  }

  console.log("Parsing cycle ended.");
}

/**
 * Function gets page content and create Cheerio object
 *
 * @param url
 * @returns {Promise<any>}
 */
async function getPage(url: string) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        headers: {
          //Don't forget about User Agent, otherwise it's possible you will be detected like a bot.
          "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
        },
        rejectUnauthorized: false,
      },
      (error, response, body) => {
        if (error) {
          return reject(error);
        }

        //Add "decodeEntities" flag to avoid decoding entities and be able to search by selectors
        return resolve(cheerio.load(body, { decodeEntities: false }));
      }
    );
  });
}

/**
 * Function get all posts links from resource page
 *
 * @param resource
 * @returns {Promise<Array>}
 */
async function getLinks(resource: any) {
  const links = [];
  const $ = await getPage(resource.link);

  const posts = $(resource.postSelector);

  for (const post of posts) {
    let link = $(post).find(resource.linkSelector).attr("href");

    if (!isValidUrl(link)) link = new URL(resource.link).origin + link;

    links.push(link);
  }

  return links;
}

/**
 * Function checks if url is valid
 *
 * @param url
 * @returns {Boolean}
 */
function isValidUrl(url: string) {
  return !!urlPattern.test(url);
}
