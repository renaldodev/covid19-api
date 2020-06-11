const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const date = require("date-and-time");

function crowler() {
  return new Promise(resolve => {
    const data = [];
    request("https://ncov2019.live/data", (error, response, html) => {
      if (error) console.log(error);
      const $ = cheerio.load(html);
      const table = $("table#sortable_table_world tbody");
      const trs = table.find("tr");

      trs.each((i, tr) => {
        const tds = $(tr).find("td");
        const country = $(tds[0])
          .text()
          .replace("★", "")
          .trim();
        const confirmed = $(tds[1])
          .text()
          .trim();
        const confirmedChangeToday = $(tds[2])
          .text()
          .trim();
        const critical = $(tds[4])
          .text()
          .trim();
        const death = $(tds[5])
          .text()
          .trim();
        const deathChangeToday = $(tds[6])
          .text()
          .trim();
        const tests = $(tds[8])
          .text()
          .trim();
        const active = $(tds[9])
          .text()
          .trim();
        const recovered = $(tds[10])
          .text()
          .trim();
        const dataContry = {
          country,
          confirmed,
          confirmedChangeToday,
          critical,
          death,
          deathChangeToday,
          tests,
          active,
          recovered
        };
        data.push(dataContry);
      });
      resolve(data);
    });
  });
}

function save(dataName, data) {
  dataName =
    dataName === null
      ? `covid19-${date.format(new Date(), "DD-MM-YYYY")}`
      : dataName;
  data = JSON.stringify(data, null, 2);
  try {
    fs.writeFileSync(path.resolve(__dirname, "data", `${dataName}.json`), data);
  } catch (error) {
    console.log(error);
  }
}

function loadData() {
  return new Promise(resolve => {
    const fileName = `covid19-${date.format(new Date(), "DD-MM-YYYY")}`;
    let data = fs.readFileSync(
      path.resolve(__dirname, "data", `${fileName}.json`)
    );
    data = JSON.parse(data);
    resolve(data);
  });
}
module.exports = { crowler, save, loadData };
