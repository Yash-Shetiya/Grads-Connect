"use strict";

const firebase = require("../db");
const Login = require("../models/login");
const firestore = firebase.firestore();

const addLogin = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("logins").doc(data.email).set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const getAllLogins = async (req, res, next) => {
  try {
    const logins = await firestore.collection("logins");
    const data = await logins.get();

    const loginsArray = [];
    if (data.empty) {
      res.status(404).send("No login record found");
    } else {
      data.forEach((doc) => {
        const login = new Login(
          doc.data().email,
          doc.data().password,
          doc.data().prn
        );
        loginsArray.push(login);
      });
      res.send(loginsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const login = await firestore.collection("logins").doc(email);
    const Ldata = await login.get();

    if (!Ldata.exists) {
      res.status(404).send("Wrong Credentials");
    }
    if (!Ldata.data().prn) {
      res.send(Ldata.data());
      return;
    }
    const prn = Ldata.data().prn;
    const Cpassword = Ldata.data().password;

    if (password !== Cpassword) {
      res.status(404).send("Wrong Credentials");
      return;
    }

    let student = await firestore.collection("students2022").doc(prn);
    let Sdata = await student.get();

    if (!Sdata.exists) {
      let student = await firestore
        .collection("students2021")
        .doc(Ldata.data().prn);
      const Sdata = await student.get();
      res.send(Sdata.data());
    }

    res.send(Sdata.data());

    // if (!Ldata.exists) {
    //   res.status(404).send("login with the given ID not found");
    // } else {

    // }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateLogin = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const login = await firestore.collection("logins").doc(id);
    await login.update(data);
    res.send("Login record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteLogin = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("logins").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addLogin,
  getAllLogins,
  getLogin,
  updateLogin,
  deleteLogin,
};
