const express = require("express");
const path = require("path");
const router = express.Router();
const middleware = require("../middleware/middleware");

// const app = express();
// const express = require("express");
const bodyParser = require("body-parser");
const app = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// router.post("/weather", (req, res) => {
//   const city = req.body;
//   console.log(city.city);
//   res.send()
// });

router.post("/weather",middleware);
module.exports = router;
