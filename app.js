require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const methodOverride = require('method-override');
const { createViewPath } = require('./helpers/create_view_path');
const userRoute = require('./routes/users');
const jobRoute = require("./routes/jobs");
const galleryRoute = require("./routes/gallery");
const contactRoute = require("./routes/contact");
const indexRoute = require("./routes/index");

const PORT = process.env.PORT;



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("styles")); //serveStatic
app.use(express.static("images")); //serveStatic
app.use(methodOverride("_method"))

app.set("view engine", "ejs");
app.use(morgan("combined")); //middleware ulash


app.use(userRoute)
app.use(jobRoute)
app.use(galleryRoute)
app.use(contactRoute)
app.use(indexRoute)


app.use((req, res) => {
  res.render(createViewPath("error404"), {
    title: "Xatolik",
    page_name: "error",
  });
});

app.listen(PORT, () => {
  console.log(
    `Server ${PORT}-portda ishga tushdi`
  );
});

// app.get("/about", function (req, res) {
//   res.send("about");
// });

// app.get("/users?", function (req, res) {
//   res.send("user");
// });

// app.get("/ab?cd", function (req, res) {
//   res.send("ab?cd");
// });

// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd");
// });
// app.get("/ab*cd", (req, res) => {
//   res.send("ab*cd");
// });

// app.get("/admin/:adminId", (req, res) => {
//   //   res.send(req.params);
//   res.send(req.params.adminId);
// });
// app.get(
//   "/admin/:adminId/staff/:staffId",
//   (req, res) => {
//     //   res.send(req.params);
//     //   res.send(req.params.adminId);
//     res.send(req.params.staffId);
//   }
// );
