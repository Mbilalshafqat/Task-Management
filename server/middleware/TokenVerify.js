const ErrorHandler = require("../utiles/error");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/db");

const TokenVerify = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) {
      return next(new ErrorHandler("Token Not Found Please Login", 400));
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findFirst({
      where: {
        email: decoded.id,
      },
    });
    if (!user) {
      return next(new ErrorHandler("Token Incorrect, retry to login", 400));
    }
    req.user = user;
    next();
  } catch (error) {
    next(new ErrorHandler(error.message, 400));
  }
};

module.exports = TokenVerify;
