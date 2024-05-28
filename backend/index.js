const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/initial-backend-connection", (req, res) => {
  return res.json({ message: "This is from backend" });
});

app.listen(8081, () => {
  console.log("Backend setup successfully");
});
