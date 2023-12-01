const express = require("express");
const router = express.Router();
const controller = require("../controller/UserController");
const TokenVerify = require("../middleware/TokenVerify");

// ---- create User
router.post("/signup", controller.createUser);

router.post("/login", controller.loginUser);

router.post("/verifyToken", TokenVerify, controller.verifyToken);

module.exports = router;
