import puppeteer from "puppeteer";
import Mercury from "@postlight/mercury-parser";
import { JSDOM } from "jsdom";

import { Parser } from "~/server/models/parser.model";
import { ParsedArticle } from "~/server/models/parsed.article.model";

export default defineNitroPlugin(async () => {
  try {
    if (process.env.NODE_ENV !== "production") return;

    setInterval(async () => {
      console.log("Parsing cycle started...");
      parseArticles(await Parser.find({ status: true }));
    }, 1000 * 60 * 1);
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

  // Launch headless Chrome
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const resource of resources) {
    // Navigate to the resource URL
    await page.goto(resource.link);

    // Wait for the page to load and all client-side rendering to complete
    await page.waitForSelector(resource.postSelector);

    // Get the news links from each news block using the provided selectors
    const links = await page.$$eval(resource.postSelector + " " + resource.linkSelector, (links) => links.map((link) => link.href));

    // Changing parser last check dateTime
    await Parser.findByIdAndUpdate(resource.id, {
      lastCheck: Date.now(),
    });

    // Parsing news articles
    for (let link of links) {
      // Check if it CMC inner page
      if (new URL(link).hostname === "coinmarketcap.com") {
        await page.goto(link);
        await page.waitForSelector("a.ccMCCm");

        link = await page.$eval("a.ccMCCm", (link) => link.href);
      }

      await page.goto(link, { waitUntil: "domcontentloaded" });

      const html = await page.content();

      const dom = new JSDOM(html, { link });
      const data = await Mercury.parse(link, { html: dom.serialize(), contentType: "text" });

      if (await ParsedArticle.exists({ link: data.url })) continue;

      await ParsedArticle.create({
        parserId: resource.id,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        date: data.date_published,
        link: data.url,
      });
    }
  }

  await browser.close();
  console.log("Parsing cycle ended.");
}
