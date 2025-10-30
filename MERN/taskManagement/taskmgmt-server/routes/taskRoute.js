const express = require('express')
const taskController = require('../controllers/taskController')
const {protect, adminOnly} = require("../middleware/auth")


const router = express.Router()


router.post('/createTask', protect,adminOnly, taskController.createTask)
router.get('/getAllTask', taskController.getAllTasks)
router.get('/getTaskById/:id', taskController.getTaskById)
router.put('/updateTask/:id', protect,adminOnly, taskController.updateTask)
router.delete('/deleteTask/:id' ,protect,adminOnly, taskController.deleteTask)


router.patch('/updateTaskStatus/:id' ,protect, taskController.updateTaskStatus)
// router.get('/getTasksByProject, taskController.getTasksByProject)
// router.get('/getTaksByAssigned', taskController.getTaksByAssigned)
// router.get('/getTaksByCreatedUser', taskController.getTaksByCreatedUser)


module.exports = router