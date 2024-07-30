const express = require("express");

const { getMain } = require("../controllers/index");

const router = express.Router();

router.get("/", getMain);
module.exports = router;
