const mysql = require("../database");

exports.viewAllEmployees = (request, response) => {
  mysql.query("SELECT * FROM kanbanBoard.employees;", (error, result) => {
    if (error) {
      console.log("Fail to display all users - " + error);
    } else {
      response.send(result);
    }
  });
};
