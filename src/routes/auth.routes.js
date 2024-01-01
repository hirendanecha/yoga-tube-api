const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.login);
router.get("/me", userController.getToken);

module.exports = router;
