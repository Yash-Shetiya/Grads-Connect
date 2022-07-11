"use strict";

const firebase = require("../../db");
const Student = require("../../models/Admin/pendingStudents");
const firestore = firebase.firestore();

const addStudent = async (req, res, next) => {
  const batch = req.params.batch;
  const id = req.params.id;
  // firestore
  //   .collection(`pendingstudents${batch}`)
  //   .doc(id)
  //   .get()
  //   .then((snapshot) => {
  //     if (snapshot) {
  //       console.log(snapshot);
  //       res.send("snapshot");
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  ///////////////////////
  try {
    const student = await firestore
      .collection(`pendingstudents${batch}`)
      .doc(id);
    const data = await student.get();
    if (!data.exists) {
      res.status(404).send("Student with the given ID not found");
    } else {
      await firestore.collection(`students${batch}`).doc(id).set(data.data());
      await firestore.collection(`pendingstudents${batch}`).doc(id).delete();
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllStudents = async (req, res, next) => {
  const batch = req.params.batch;
  try {
    const students = await firestore.collection(`pendingstudents${batch}`);
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
    const student = await firestore
      .collection(`pendingstudents${batch}`)
      .doc(id);
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

// const updateStudent = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const batch = req.params.batch;
//     const data = req.body;
//     const student = await firestore
//       .collection(`pendingstudents${batch}`)
//       .doc(id);
//     await student.update(data);
//     res.send("Student record updated successfuly");
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const batch = req.params.batch;
    await firestore.collection(`pendingstudents${batch}`).doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudent,
  //   updateStudent,
  deleteStudent,
};
