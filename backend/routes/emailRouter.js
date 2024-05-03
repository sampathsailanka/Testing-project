const express = require("express");
const userEmail = require("../controllers/emailController");

const router = express.Router();

router.post("/user-email-details", userEmail);

module.exports = router;
