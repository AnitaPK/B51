const express = require('express')
const userController = require('../controllers/userControllers')
const {protect,adminOnly} = require("../middleware/auth")
const {uploadSingle} = require("../middleware/multer")

const router = express.Router()


router.post('/register' , uploadSingle('myfile'), userController.register)
router.post('/login', userController.login)
router.get('/getUserInfo', protect, userController.getUserInfo)

router.get('/getAllUsers', protect, adminOnly, userController.getAllUsers)
module.exports = router