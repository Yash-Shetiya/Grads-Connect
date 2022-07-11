"use strict";

const firebase = require("../db");
const Event = require("../models/event");
const firestore = firebase.firestore();

const addEvent = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("events").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const events = await firestore.collection("events");
    const data = await events.get();

    const eventsArray = [];
    if (data.empty) {
      res.status(404).send("No event record found");
    } else {
      data.forEach((doc) => {
        const event = new Event(
          doc.data().title,
          doc.data().description,
          doc.data().guests,
          doc.data().links,
          doc.data().imgURL,
          doc.data().dateTime,
          doc.data().status,
          doc.data().present,
          doc.data().id
        );
        eventsArray.push(event);
      });
      res.send(eventsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await firestore.collection("events").doc(id);
    const data = await event.get();
    if (!data.exists) {
      res.status(404).send("event with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const event = await firestore.collection("events").doc(id);
    await event.update(data);
    res.send("Event record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("events").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};
