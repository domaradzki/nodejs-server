const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the midleware");
  next();
});

app.use((req, res, next) => {
  console.log("In the next midleware");
  res.send("<h1>Hello Server Express!!</h1>");
});

app.listen(3000, console.log("Server started"));
