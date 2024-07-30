const axios = require("axios");

const { createViewPath } = require("../helpers/create_view_path");

const getJobs = (req, res) => {
  res.render(createViewPath("jobs"), {
    title: "Jobs",
    page_name: "jobs",
  });
};


module.exports = {
  getJobs
};
