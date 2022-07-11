const express = require("express");
const {
  addEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventsController");

const router = express.Router();

router.post("/event", addEvent);
router.get("/events", getAllEvents);
router.get("/event/:id", getEvent);
router.put("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

module.exports = {
  routes: router,
};
