const express = require('express')
const userController = require('../controllers/userControllers')
const {protect} = require("../middleware/auth")
const {uploadSingle} = require("../middleware/multer")

const router = express.Router()


router.post('/register' , uploadSingle('myfile'), userController.register)
router.post('/login', userController.login)
router.get('/getUserInfo', protect, userController.getUserInfo)


module.exports = router