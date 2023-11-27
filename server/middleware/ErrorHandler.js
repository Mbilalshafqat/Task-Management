const ErrorHandler = require("../utiles/error");

const ErrorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Check for a specific error scenario (e.g., duplicate email)
  if (err.code === "DUPLICATE_EMAIL_ERROR") {
    const message = "Email address is already registered";
    err = new ErrorHandler(message, 400);
  }

  // Handle JWT expiration error
  if (err.name === "TokenExpiredError") {
    const message = "JWT token has expired";
    err = new ErrorHandler(message, 400);
  }

  // Handle other JWT-related errors
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid JWT token";
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = ErrorMiddleware;
