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

exports.addNewEmployee = (request, response) => {
  const {
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
  } = request.body;

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
      response.send("New employee created successfully.");
    }
  });
};
