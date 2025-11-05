const express = require('express')
const projectController = require('../controllers/projectController')
const {protect, adminOnly} = require("../middleware/auth")

const router = express.Router()


router.post('/createProject' ,protect,adminOnly, projectController.createProject)
router.get('/getAllProject', projectController.getAllProject)
router.get('/getProjectById/:id', projectController.getProjectById)
router.put('/updateProject/:id', protect,adminOnly, projectController.updateProject )
router.delete('/deleteProject/:id', protect,adminOnly, projectController.deleteProject )

router.patch('/updateStatusProject/:id', protect,adminOnly,projectController.updateStatusProject)



module.exports = router

