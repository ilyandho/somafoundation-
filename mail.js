require("dotenv").config();
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "ii.ndhote@gmail.com",
    subject: subject,
    text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
