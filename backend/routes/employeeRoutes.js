const express = require("express");

const employeeRouter = express.Router();

const { viewAllEmployees } = require("../controllers/employeeController");

employeeRouter.route("/viewAllEmployees").get(viewAllEmployees);

module.exports = employeeRouter;
