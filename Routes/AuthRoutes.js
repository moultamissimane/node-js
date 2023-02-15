const express = require("express");
const Login = require("../controllers/LoginController");
const Register = require("../controllers/RegisterController");
const router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

module.exports = router;
