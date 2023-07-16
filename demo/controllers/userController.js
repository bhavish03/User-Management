var db = require("../models");
var User = db.user;
var addUser = async (req, res) => {
  const jane = User.build({ firstName: "jane" });
  console.log(jane instanceof User);
  console.log(jane.name);
  await jane.save();
  console.log("Jane was saved to the database");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

module.exports = {
  addUser,
};
