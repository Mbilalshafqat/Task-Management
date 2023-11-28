const express = require("express");
const router = express.Router();
const controller = require("../controller/UserController");

// ---- create User
router.post("/signup", controller.createUser);

module.exports = router;
