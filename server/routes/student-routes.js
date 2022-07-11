const express = require("express");
const {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.post("/student/:batch", addStudent);
router.get("/students/:batch", getAllStudents);
router.get("/student/:batch/:id", getStudent);
router.put("/student/:batch/:id", updateStudent);
router.delete("/student/:batch/:id", deleteStudent);

module.exports = {
  routes: router,
};
