const express = require("express");
const router = express.Router();

const authController = require("./auth.js");
const journal = require("./journal.js");

router.use("/auth", authController);
router.use("/journal", journal);

module.exports = router;