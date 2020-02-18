const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

//Data parsing
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// Handle Routes

app.post("/email", (req, res) => {
  // Send email here
  console.log("Data:", req.body);
  res.json({ message: "Message received!!! " });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "backend", "server.html"));
});

//  Listen to the port
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
