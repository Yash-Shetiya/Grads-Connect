const express = require("express");
const { sendEmail } = require("../models/email");

const router = express.Router();

router.post("/email", sendEmail);

module.exports = {
  routes: router,
};
