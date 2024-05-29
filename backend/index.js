const express = require("express");
const cors = require("cors");

const routes = require("./routes/employeeRoutes");

const database = require("./database");

const app = express();

app.use(cors());

app.use(routes);

app.listen(8081, () => {
  console.log("Backend setup successfully");
});

app.get("/initial-backend-connection", (req, res) => {
  return res.json({ message: "This is from backend" });
});
