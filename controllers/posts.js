const axios = require("axios");
const { createViewPath } = require("../helpers/create_view_path");

const getPosts = async (req, res) => {
  try {
    const postData = await axios("https://jsonplaceholder.typicode.com/posts");
    const posts = postData.data;
    res.render(createViewPath("posts"), {
      title: "Posts",
      posts,
      page_name: "posts",
    });
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.render(createViewPath("post"), {
      title: `Post ${id}`,
      post: data,
      page_name: "posts",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAddPost = (req, res) => {
  res.render(createViewPath("add-post"), {
    title: "Yangi post qo`shish",
    page_name: "posts",
  });
};

const postAddPost = async (req, res) => {
  const { title, body } = req.body;
  try {
    await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title,
      body,
    });

    res.redirect("/posts");
  } catch (error) {
    console.log(error);
  }
};

const delPostById = async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting post: ", error);
  }
};

const getEditPostById = async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching post with id: ${id}`); // Debugging statement
  try {
    const postData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = postData.data;
    console.log(`Fetched post: ${JSON.stringify(post)}`); // Debugging statement
    res.render(createViewPath("edit-post"), {
      title: "Post tahrirlash",
      post,
      page_name: "edit_post",
    });
  } catch (error) {
    console.error("Error fetching post: ", error);
    res.status(500).send("Internal Server Error");
  }
};

const putEditPostById = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  try {
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body,
    });
    res.redirect(`/post/${id}`);
  } catch (error) {
    console.error("Error updating post: ", error);
  }
};

module.exports = {
  getPosts,
  getPostById,
  getAddPost,
  postAddPost,
  delPostById,
  getEditPostById,
  putEditPostById,
};
