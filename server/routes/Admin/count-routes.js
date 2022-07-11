const express = require("express");
const router = express.Router();

const { getCount, inEvent } = require("../../controllers/Admin/count");

router.get("/count", getCount);
router.get("/countEve", inEvent);

module.exports = {
  routes: router,
};
