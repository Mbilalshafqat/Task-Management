const express = require("express");
const router = express.Router();
const controller = require("../controller/UserController");
const TokenVerify = require("../middleware/TokenVerify");

// ---- create User
router.post("/signup", controller.createUser);

// ----- login user
router.post("/login", controller.loginUser);

// ---- token verify
router.post("/verifyToken", TokenVerify, controller.verifyToken);

module.exports = router;
