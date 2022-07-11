const express = require("express");
const {
  addLogin,
  getAllLogins,
  getLogin,
  updateLogin,
  deleteLogin,
} = require("../controllers/loginController");

const router = express.Router();

router.post("/login", getLogin);
router.post("/register", addLogin);
router.get("/logins", getAllLogins);
router.get("/login", getLogin);
router.put("/login/:id", updateLogin);
router.delete("/login/:id", deleteLogin);

module.exports = {
  routes: router,
};
