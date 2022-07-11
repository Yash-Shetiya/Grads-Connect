const express = require("express");
const {
  addTestimonial,
  getAllTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const router = express.Router();

router.post("/testimonial", addTestimonial);
router.get("/testimonials", getAllTestimonials);
router.get("/testimonial/:id", getTestimonial);
router.put("/testimonial/:id", updateTestimonial);
router.delete("/testimonial/:id", deleteTestimonial);

module.exports = {
  routes: router,
};
