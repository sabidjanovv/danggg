const express = require("express");

const {
  getPosts,
  getPostById,
  getAddPost,
  postAddPost,
  delPostById,
  getEditPostById,
  putEditPostById,
} = require("../controllers/posts");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/post/:id", getPostById);
router.get("/add-post", getAddPost);
router.post("/add-post", postAddPost);
router.delete("/post/:id", delPostById);
router.get("/edit_post/:id", getEditPostById);
router.put("/edit_post/:id", putEditPostById);

module.exports = router;
