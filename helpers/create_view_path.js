const path = require("node:path");

const createViewPath = (page) => {
  return path.join(
    __dirname, 
    "../views", 
    `${page}.ejs`
   );
};

module.exports = {
    createViewPath
};