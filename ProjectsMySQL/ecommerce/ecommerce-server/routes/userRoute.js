const express = require("express");
const userController = require("../controllers/userController");
const {protect,adminOnly} = require("../middleware/auth")

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login )
router.get("/getUserInfo/:ID", protect, userController.getUserInfo)

module.exports = router;
