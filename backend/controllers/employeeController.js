const mysql = require("../database");

exports.viewAllEmployees = (request, response) => {
  mysql.query("SELECT * FROM kanbanBoard.employees;", (error, result) => {
    if (error) {
      response.send("Fail to display all employees - " + error);
    } else {
      response.send(result);
    }
  });
};

exports.addNewEmployee = (request, response) => {
  const {
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

  let id = 0;

  const username = first_name + "_" + last_name;

  mysql.query(
    "SELECT * FROM employees ORDER BY id DESC LIMIT 1;",
    (error, result) => {
      if (error) {
        response.send("Fail to get the last entry in the database: " + error);
      } else {
        id = result[0].id + 1;
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
            if (error.errno == 1062) {
              response.send("Employee ID exists");
            } else {
              response.send("Fail to create new user - " + error);
            }
          } else {
            response.send("New employee created successfully.");
          }
        });
      }
    }
  );
};

exports.removeEmployee = (request, response) => {
  const { id } = request.body;

  const query = "DELETE FROM employees WHERE id = ?;";
  const params = [id];

  mysql.query(query, params, (error, result) => {
    if (error) {
      response.send("Fail to delete user - " + error);
    } else {
      if (result.affectedRows == 0) {
        response.send("Employee ID could not be found.");
      } else {
        response.send("Employee deleted successfully.");
      }
    }
  });
};
