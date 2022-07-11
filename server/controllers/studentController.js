"use strict";

const firebase = require("../db");
const Student = require("../models/student");
const firestore = firebase.firestore();

const addStudent = async (req, res, next) => {
  const batch = req.params.batch;
  try {
    const data = req.body;
    // console.log(data);
    await firestore.collection(`students${batch}`).doc(data.prn).set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllStudents = async (req, res, next) => {
  const batch = req.params.batch;
  try {
    const students = await firestore.collection(`students${batch}`);
    const data = await students.get();
    const studentsArray = [];
    if (data.empty) {
      res.status(404).send("No student record found");
    } else {
      data.forEach((doc) => {
        const student = new Student(
          doc.data().batch,
          doc.data().name,
          doc.data().department,
          doc.data().email,
          doc.data().linkedIn,
          doc.data().clgPlacement,
          doc.data().imageSrc,
          doc.data().designation,
          doc.data().organisation,
          doc.data().placeOrganisation,
          doc.data().areaWork,
          doc.data().achievement,
          doc.data().phoneNumber,
          doc.data().prn
        );
        studentsArray.push(student);
      });
      res.send(studentsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const batch = req.params.batch;
    const student = await firestore.collection(`students${batch}`).doc(id);
    const data = await student.get();
    if (!data.exists) {
      res.status(404).send("Student with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const batch = req.params.batch;
    const data = req.body;
    // console.log(data);
    await firestore.collection(`pendingstudents${batch}`).doc(id).set(data);
    // await student.update(data);
    res.send("Student record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const batch = req.params.batch;
    await firestore.collection(`students${batch}`).doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
