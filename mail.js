const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "",
    domain: ""
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "lessu006@gmail.com",
  to: "ii.ndhote@gmail.com",
  subject: "Testing",
  text: "I would like toget in touch with you"
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error occurs >>>", err);
  } else {
    console.log("Message sent: >>>");
  }
});
