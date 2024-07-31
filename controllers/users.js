const axios = require("axios");

const { createViewPath } = require("../helpers/create_view_path");

const getUsers = async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    const users = await userData.data;
    res.render(createViewPath("users"), {
      title: "Users",
      users,
      page_name: "users",
    });
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    res.render(createViewPath("user"), {
      title: "User",
      user: data,
      page_name: "/users",
    });
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

const getAddUser = (req, res) => {
  res.render(createViewPath("add-user"), {
    title: "Yangi user",
    page_name: "/users",
  });
};

const postAddUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const userData = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      {
        username,
        email,
      }
    );
    const user = userData.data;
    res.render(createViewPath("user"), {
      title: "New user",
      user,
      page_name: "/users",
    });
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

const delUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = userData.data;
    console.log(user);
    res.sendStatus(204);
    // res.redirect("/users");
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

const getEditUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const user = userData.data;
    res.render(createViewPath("edit-user"), {
      title: user.username,
      user,
      page_name: "/users",
    });
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

const putEditUserById = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, phone } = req.body;
  try {
    const userData = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name,
        username,
        email,
        phone,
      }
    );
    const user = userData.data;
    res.render(createViewPath("user"), {
      title: user.username,
      user,
      page_name: "/users",
    });
  } catch (error) {
    console.error("Ma'lumot o'qishda xatolik: ", error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  delUserById,
  getEditUserById,
  putEditUserById,
};
