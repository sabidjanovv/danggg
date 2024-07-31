require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const userRoute = require("./routes/users");
const jobRoute = require("./routes/jobs");
const galleryRoute = require("./routes/gallery");
const contactRoute = require("./routes/contact");
const indexRoute = require("./routes/index");
const postRoute = require("./routes/posts");

const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(morgan("combined"));

app.use(userRoute);
app.use(jobRoute);
app.use(galleryRoute);
app.use(contactRoute);
app.use(indexRoute);
app.use(postRoute);

app.use((req, res) => {
  res.status(404).render("error404", {
    title: "Xatolik",
    page_name: "error",
  });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});
