const express = require("express");
const {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../../controllers/Admin/PendingStudentController");

const router = express.Router();

router.post("/pendingStudent/:batch/:id", addStudent);
router.get("/pendingStudents/:batch", getAllStudents);
router.get("/pendingStudent/:batch/:id", getStudent);
router.delete("/pendingStudent/:batch/:id", deleteStudent);

module.exports = {
  routes: router,
};
