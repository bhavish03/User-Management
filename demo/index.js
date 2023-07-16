const express = require("express");
require("./models");
var userCtrl = require("./controllers/userController");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add", userCtrl.addUser);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
