const express = require("express");
const Sequelize = require("sequelize");

const app = express();

// Connect to the database
const sequelize = new Sequelize("weatherdata", "dbuser", "dbpassword", {
  host: "database",
  dialect: "mysql",
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Weather Forecast API! Available endpoints: /weather");
});

// Weather route
app.get("/weather", (req, res) => {
  const city = req.query.city || "Unknown City";
  const forecast = {
    city: city,
    description: "Sunny",
    temperature: 25,
  };
  res.json(forecast);
});

// Start the server
app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});
