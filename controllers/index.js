const axios = require("axios");

const { createViewPath } = require("../helpers/create_view_path");

const getMain = (req, res) => {
  res.render(createViewPath("index"), {
    title: "Main",
    page_name: "main",
  });
};

module.exports = {
  getMain,
};
