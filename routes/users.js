const express = require("express");

const {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  delUserById,
  getEditUserById,
  putEditUserById,
} = require("../controllers/users");

const router = express.Router();

router.get("/users?", getUsers);
router.get("/user/:id", getUserById);
router.get("/add-user", getAddUser);
router.post("/add-user", postAddUser);
router.delete("/user/:id", delUserById);
router.get("/edit/:id", getEditUserById);
router.put("/edit/:id", putEditUserById);

module.exports = router;