const express = require("express");

const employeeRouter = express.Router();

const {
  viewAllEmployees,
  addNewEmployee,
} = require("../controllers/employeeController");

employeeRouter.route("/viewAllEmployees").get(viewAllEmployees);
employeeRouter.route("/addNewEmployee").get(addNewEmployee);

module.exports = employeeRouter;
