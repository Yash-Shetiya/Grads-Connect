"use strict";

const firebase = require("../db");
const Testimonial = require("../models/testimonial");
const firestore = firebase.firestore();

const addTestimonial = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("testimonials").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await firestore.collection("testimonials");
    const data = await testimonials.get();
    const testimonialsArray = [];
    if (data.empty) {
      res.status(404).send("No testimonial record found");
    } else {
      data.forEach((doc) => {
        const testimonial = new Testimonial(
          doc.data().name,
          doc.data().description,
          doc.data().designation,
          doc.data().src
        );
        testimonialsArray.push(testimonial);
      });
      res.send(testimonialsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id;
    const testimonial = await firestore.collection("testimonials").doc(id);
    const data = await testimonial.get();
    if (!data.exists) {
      res.status(404).send("Testimonial with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id; ///
    const data = req.body;
    const testimonial = await firestore.collection("testimonials").doc(id);
    await testimonial.update(data);
    res.send("Testimonial record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("testimonials").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addTestimonial,
  getAllTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
