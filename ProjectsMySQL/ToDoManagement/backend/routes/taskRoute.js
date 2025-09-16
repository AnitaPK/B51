const express = require('express')
const taskController = require('../controllers/taskController')

const router = express.Router()


router.post('/createTask', taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)
router.get('/getTaskByID/:ID',taskController.getTaskByID)
router.put('/updateTaskById/:ID', taskController.updateTask)
router.delete('/deleteTask/:ID', taskController.deleteTask)

module.exports = router