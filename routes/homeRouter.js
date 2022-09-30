// Routes For Homepage

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,  "../components/html/homepage.html"));
});

module.exports = router;
