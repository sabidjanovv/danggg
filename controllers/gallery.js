const axios = require("axios");

const { createViewPath } = require("../helpers/create_view_path");

const getGallery = (req, res) => {
  res.render(createViewPath("gallery"), {
    title: "Galleriya",
    page_name: "gallery",
  });
};

module.exports = {
  getGallery,
};
