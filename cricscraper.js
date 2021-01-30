//cricscraper.js

const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://stats.espncricinfo.com/ci/content/records/83548.html";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable = $("tbody>tr");
    const topCricScorers = [];

    statsTable.each(function () {
      const playerName = $(this).find("td.left").text();
      const runscored = $(this).find("b").text();

      topCricScorers.push({
        name: playerName,
        runscored,
      });
    });

    console.log(topCricScorers);
  })
  .catch(console.error);
