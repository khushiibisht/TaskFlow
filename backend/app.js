const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middleware/logger");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use(taskRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to TaskFlow Backend!");
});

module.exports = app;