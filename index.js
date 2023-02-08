const main = require("./src/main");
const dotenv = require("dotenv");
dotenv.config();
main
  .load()
  .catch((error) => {
    console.log("Error loading packages: " + error);
    console.error(error);
  })
  .then(() => {
    if (process.env.DEBUG_GLUE === "true") console.log("Glue Packages loaded");
  });
module.exports = main;
