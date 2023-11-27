const express = require("express");
const app = express();

// --- dotenv
require("dotenv").config();

// -- create Server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// ---- error Handling  middleware
process.on("unhandledRejection", (err) => {
  console.log("Error Due to unhandledRejection", err.message);
  console.log("Server is shutting down");
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", () => {
  console.log("Error Due to uncaughtException", err.message);
  console.log("Server is shutting down");
  server.close(() => {
    process.exit(1);
  });
});

require("./utiles/error");
