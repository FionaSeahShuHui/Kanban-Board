var mysql = require("mysql");

require("dotenv").config();

var sqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

sqlConnection.connect(function (err) {
  if (err) {
    console.log("Fail to connect to database - " + err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = sqlConnection;
