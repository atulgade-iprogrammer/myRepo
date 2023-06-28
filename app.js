const express = require("express");
const app = express();
const router = require("./Router/router");
const path = require("path");
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000);
app.use(router);
const htmlPath = path.join(__dirname, "public");
console.log(htmlPath);
app.use(express.static(htmlPath));
app.get("/", (req, res) => {
  res.sendFile(htmlPath + "/weather.html");
});


