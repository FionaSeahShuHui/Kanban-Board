const mysql = require("../database");

exports.viewAllEmployees = (request, response) => {
  mysql.query("SELECT * FROM kanbanBoard.employees;", (error, result) => {
    if (error) {
      console.log("Fail to display all employees - " + error);
    } else {
      console.log("Display all employees successfully.");
      response.send(result);
    }
  });
};

exports.addNewEmployee = (request, response) => {
  const {
    id,
    first_name,
    last_name,
    department,
    gender,
    birth_date,
    hire_date,
    mobile_number,
    adminstrative_rights,
    password,
  } = request.body;

  const username = first_name + "_" + last_name;

  const query =
    "INSERT INTO employees ( id, username, first_name, last_name, department, gender, birth_date, hire_date, mobile_number, adminstrative_rights,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const params = [
    id,
    username,
    first_name,
    last_name,
    department,
    gender,
    birth_date,
    hire_date,
    mobile_number,
    adminstrative_rights,
    password,
  ];
  mysql.query(query, params, (error, result) => {
    if (error) {
      console.log("Fail to create new user - " + error);
    } else {
      console.log("New employee created successfully.");
      response.send("New employee created successfully.");
    }
  });
};

exports.removeEmployee = (request, response) => {
  const { id } = request.body;

  const query = "DELETE FROM employees WHERE id = ?;";
  const params = [id];

  mysql.query(query, params, (error, result) => {
    if (error) {
      console.log("Fail to delete user - " + error);
    } else {
      console.log("Employee deleted successfully.");
      response.send("Employee deleted successfully.");
    }
  });
};
