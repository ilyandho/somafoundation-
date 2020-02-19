const express = require("express");
const path = require("path");
const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");

const sendMail = require("./mail");

const app = express();

const PORT = process.env.PORT || 8080;

//Data parsing
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Handle Routes

app.post(
  "/email",
  // [
  //   body("email", "Invalid email address")
  //     .isEmail()
  //     .normalizeEmail(),
  //   ,
  //   body("subject")
  //     .isLength({ min: 3 })
  //     .not()
  //     .isEmpty()
  //     .trim()
  //     .escape(),

  //   body("text")
  //     .isLength({ min: 10 })
  //     .not()
  //     .isEmpty()
  //     .trim()
  //     .escape(),
  //   sanitizeBody("notifyOnReply").toBoolean()
  // ],
  (req, res) => {
    const errors = validationResult(req);

    // Send email here
    console.log("Data:", req.body);
    const { subject, email, textMessage } = req.body;

    // VALIDATE DATA
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // } else {
    //   // inputs are email, subject, text, callback
    //   sendMail(email, subject, text, function(err, data) {
    //     if (err) {
    //       res.status(500).json({ message: "Internal Error >>>>>" });
    //     } else {
    //       res.json({ message: "Email sent >>>>>" });
    //     }
    //   });
    // }

    sendMail(email, subject, textMessage, function(err, data) {
      if (err) {
        res.status(500).json({ message: "Internal Error >>>>>" });
      } else {
        res.json({ message: "Email sent >>>>>" });
      }
    });
  }
);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "backend", "server.html"));
});

//  Listen to the port
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
