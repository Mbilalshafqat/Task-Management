const express = require("express");
const app = express();
// --- cors
const Cors = require("cors");
app.use(Cors());

// --- dotenv
require("dotenv").config();

// ---- body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// ----- router
app.use("/", require("./routes/UserRoute"));

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

app.use(require("./middleware/ErrorHandler"));
