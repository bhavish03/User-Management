const { Sequelize, DataTypes, Model } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("user_system", "root", "", {
  host: "localhost",
  logging: false,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User")(sequelize, DataTypes, Model);
db.sequelize.sync({ force: true });
module.exports = db;
