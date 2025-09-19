const express = require('express')
const taskController = require('../controllers/taskController')

const router = express.Router()


router.post('/createTask', taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)
router.get('/getTaskByID/:ID',taskController.getTaskByID)
router.put('/isComplete/:ID', taskController.updateIsComplete)
router.delete('/deleteTask/:ID', taskController.deleteTask)
router.put('/updateTask/:ID', taskController.updateTask)
module.exports = router