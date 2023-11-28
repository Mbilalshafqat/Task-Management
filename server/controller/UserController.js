const validator = require("validator");
const ErrorHandler = require("../utiles/error");
const Prisma = require("../prisma/db");

module.exports = {
  // ----- create user
  createUser: async (req, res, next) => {
    try {
      const { userName, email, password } = req.body;
      if (!userName || !email || !password) {
        return next(new ErrorHandler("Plaese Enter All Fields", 400));
      }
      //   --- validation for email address
      if (!validator.isEmail(email)) {
        return next(
          new ErrorHandler("Please enter a valid email address", 400)
        );
      }
      //   --- check is email alredy exist
      const IsUserExist = await Prisma.user.findFirst({
        where: {
          email: email,
        },
      });
      if (IsUserExist) {
        return next(new ErrorHandler("Email Alrady Exist, Plaese Login", 400));
      }
      //   --- create the user
      const newUser = await Prisma.user.create({
        data: {
          email,
          password,
          userName,
        },
      });
      res.status(200).json({
        sucess: true,
        message: "SignUp Successfully",
        user: newUser,
      });
    } catch (error) {}
  },
};
