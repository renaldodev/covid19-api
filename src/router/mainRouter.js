const router = require("express").Router();
const { loadData } = require("./../crowler");

router.get("/", (req, res) => {
  loadData().then(data => {
    data.shift();
    return res.json(data);
  });
});

router.get("/total", (req, res) => {
  loadData().then(data => res.json(data.shift()));
});

router.get("/country/:country", (req, res) => {
  loadData().then(data => {
    const country = data.filter(
      ele => ele.country.toLowerCase() === req.params.country.toLowerCase()
    );
    res.json(country);
  });
});

module.exports = router;
