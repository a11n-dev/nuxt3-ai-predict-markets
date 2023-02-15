const posts = document.querySelectorAll(".infinite-scroll-component > div.sc-aef7b723-0");

const parsed = {};

let currentDate = "";

posts.forEach((post) => {
  if (post.classList.contains("kjWeaT")) {
    currentDate = post.querySelector("p.jtWqsH").textContent;

    parsed[currentDate] = [];
    return;
  }

  parsed[currentDate].push({
    link: post.querySelector("a.dNqZZN").href,
    time: post.querySelector("p.cGmDRE").textContent,
    metadata: {
      resource: post.querySelector(".kfmhgr span.ePTNty").textContent,
      categories: [...post.querySelectorAll('.iDVGbz .ilKLzT span.kKzvTI')]?.map(el => el.textContent) || null
    },
  });
});

console.log(JSON.stringify(parsed, null, 2));

