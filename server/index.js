"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const config = require("./config");
const studentRoutes = require("./routes/student-routes");
const eventRoutes = require("./routes/event-routs");
const loginRoutes = require("./routes/login-routes");
const testimonialRoutes = require("./routes/testimonial-routes");
const emailRoutes = require("./routes/email-routes");
const pendingStudentsRoutes = require("./routes/Admin/student-routes");
const csvRoutes = require("./routes/Admin/csv-routes");
const countRoutes = require("./routes/Admin/count-routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(fileUpload());
// global.__basedir = __dirname + "/..";
// app.use(express.urlencoded({ extended: true }));

app.use(studentRoutes.routes);
app.use(eventRoutes.routes);
app.use(testimonialRoutes.routes);
app.use(loginRoutes.routes);
app.use(emailRoutes.routes);
app.use(pendingStudentsRoutes.routes);
app.use(csvRoutes.routes);
app.use(countRoutes.routes);

// app.use("/api",studentRoutes.routes);   //http://localhost:8080/api/students

app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);
