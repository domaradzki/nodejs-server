const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //not nessesary as the defaulti is views

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoutes);

app.use(errorController.get404Page);

app.listen(3000, console.log("Server started"));
