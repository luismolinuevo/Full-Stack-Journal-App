const express = require("express");
const router = express.Router();

const authController = require("./auth.js");

router.use("/auth", authController);

module.exports = router;