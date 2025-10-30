const express = require('express')
const projectController = require('../controllers/projectController')
const {protect, adminOnly} = require("../middleware/auth")

const router = express.Router()


router.post('/createProject' ,protect,adminOnly, projectController.createProject)
router.get('/getAllProject', projectController.getAllProject)
router.get('/getProjectById/:id', projectController.getProjectById)
router.put('/udateProject/:id', protect,adminOnly, projectController.udateProject )
router.delete('/deleteProject/:id', protect,adminOnly, projectController.deleteProject )

router.patch('/updateStatusProject/:id', protect,adminOnly,projectController.updateStatusProject)



module.exports = router

