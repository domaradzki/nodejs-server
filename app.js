const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHlbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// app.engine(
//   "hbs",
//   expressHlbs({
//     extname: "hbs",
//     defaultLayout: "main",
//     layoutsDir: "views/layouts/"
//   })
// );

app.set("view engine", "ejs");
app.set("views", "views"); //not nessesary as the defaulti is views

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000, console.log("Server started"));
