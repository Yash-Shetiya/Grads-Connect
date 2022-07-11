const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "beproject.gp01@gmail.com",
    pass: "Temp@123",
  },
});

const sendEmail = (req, res, next) => {
  let subject = req.body.subject ? req.body.subject : "Grads Connect";
  var mailOptions = {
    from: "beproject.gp01@gmail.com",
    to: req.body.email,
    subject: subject,
    text: req.body.text,
    html: `<h4>${req.body.text}</h4><img src="https://firebasestorage.googleapis.com/v0/b/grades-connect.appspot.com/o/gradsConnectLogo.png?alt=media"/>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send(`Email sent:  +  ${info.response}`);
    }
  });
};

module.exports = { sendEmail };
