const express = require("express");
const router = express.Router();

const multer = require("multer");

const { CSVHandler } = require("../../controllers/Admin/csv");

const upload = multer({ dest: "tmp/csv/" });

router.post("/upload/:batch", upload.single("file"), CSVHandler);

module.exports = {
  routes: router,
};
