const express = require("express");

const {
  getJobs,
} = require("../controllers/jobs");

const router = express.Router();

router.get("/jobs?", getJobs);
module.exports = router;
