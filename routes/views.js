const express = require("express");
const {login, register, home, success, logout, marketplace, requestedData} = require("../controllers/views")
const authMiddleware = require("../middlewares/authentication")
const checkLoggedIn = require("../middlewares/check-logged-in")
const notLoggedInTest = require("../middlewares/not-logged-in")
const router = express.Router();

router.get("/login",checkLoggedIn, login)
router.get("/register",checkLoggedIn, register)
router.get("/marketplace", notLoggedInTest, marketplace)
router.get("/requested-data", notLoggedInTest, requestedData)
router.get("/logout", logout)

module.exports = router;