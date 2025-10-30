const Task = require('../models/taskModel')

async function createTask(req,res){
    const {title,description, startDate, endDate, projectId, assignTo, status,priority } = req.body
    const addedBy = req.user.id
    try {
            const newTask = await Task.create({title,description, startDate, endDate, addedBy,projectId,assignTo, status,priority})
            await newTask.save()
            res.status(200).json({message:"New Task added successfully"})
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getAllTasks(req,res){
    try {
        const allTasks = await Task.find()
            res.status(200).json({task:allTasks})
    } catch (error) {
    console.error("***createUser error***", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getTaskById(req,res){
    const id = req.params.id
    try {
        const task = await Task.findOne({_id:id})
            res.status(200).json({task:task})
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
} 
async function updateTask(req,res){
    const {title,description, startDate, endDate,addedBy,projectId,assignTo} = req.body
    const id = req.params.id
    try {
        const updatedTask = await Task.findByIdAndUpdate({_id:id}, {title,description, startDate, endDate, addedBy,projectId, assignTo})
            updatedTask.save()
        if(!updatedProject) return res.status(400).json({message:"Task not updated"})
        res.status(200).json({message:"Task updated successfully"})
        
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function deleteTask(req,res){
    try {
         const id = req.params.id
         const taskForDelete = await Task.findByIdAndDelete({_id:id})
        res.status(200).json({message:"Task deleted successfully"})

    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function updateTaskStatus(req,res) {
    const id = req.params.id
    const {status}=req.body

    try{
        const taskForUpdateStatus = await Task.findById(id)
        if(!taskForUpdateStatus) return res.status(400).json({message:"No such Task"})
        
        const updatedTaskStatus = await Task.findByIdAndUpdate(id,{status},{new:true} )
        // await updatedTaskStatus.save()
        res.status(200).json({message:"Task status updated successfully"})

        } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}


module.exports = {
    createTask,getAllTasks, getTaskById, updateTask,deleteTask, updateTaskStatus
}