require("dotenv").config();
const express = require("express");
const app = express();
const { crowler, save } = require("./crowler");
const cron = require("node-cron");

const MainRouter = require("./router/mainRouter");

app.use("/api", MainRouter);
//background job para ativar o crawler todas meia noite
cron.schedule("0 0 * * * ", () => {
  crowler().then(data => save(null, data));
});

app.listen(process.env.PORT || 3000, console.log("app is running"));
