const express = require("express");

const employeeRouter = express.Router();

const {
  viewAllEmployees,
  addNewEmployee,
  removeEmployee,
} = require("../controllers/employeeController");

employeeRouter.route("/viewAllEmployees").get(viewAllEmployees);
employeeRouter.route("/addNewEmployee").get(addNewEmployee);
employeeRouter.route("/removeEmployee").get(removeEmployee);

module.exports = employeeRouter;
