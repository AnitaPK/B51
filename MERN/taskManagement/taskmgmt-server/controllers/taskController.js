const Task = require('../models/taskModel')

async function createTask(req,res){
    const {title,description, startDate, endDate, projectId, assignTo, status,priority } = req.body
    const addedBy = req.user._id
    try {
            const newTask = await Task.create({title,description, startDate, endDate, addedBy,projectId,assignTo, status,priority})
            await newTask.save()
            res.status(200).json({message:"New Task added successfully"})
    } catch (error) {
    console.error("createTask error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getAllTasks(req,res){
    try {
        const allTasks = await Task.find().populate('projectId', 'name').populate('assignTo', 'name email').populate('addedBy', 'name email')
            res.status(200).json({tasks:allTasks})
    } catch (error) {
    console.error("getAllTasks error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getTaskById(req,res){
    const id = req.params.id
    try {
        const task = await Task.findOne({_id:id}).populate('projectId', 'name').populate('assignTo', 'name email').populate('addedBy', 'name email')
            res.status(200).json({task:task})
    } catch (error) {
    console.error("getTaskById error", error);
    res.status(500).json({ message: "Server error" });
    }
} 
async function updateTask(req,res){
    const {title,description, startDate, endDate, projectId, assignTo, status, priority} = req.body
    const id = req.params.id
    try {
        const updateData = {title, description, startDate, endDate, projectId, assignTo}
        if(status) updateData.status = status
        if(priority) updateData.priority = priority
        
        const updatedTask = await Task.findByIdAndUpdate({_id:id}, updateData, {new: true})
        if(!updatedTask) return res.status(400).json({message:"Task not updated"})
        res.status(200).json({message:"Task updated successfully"})
        
    } catch (error) {
    console.error("updateTask error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function deleteTask(req,res){
    try {
         const id = req.params.id
         const taskForDelete = await Task.findByIdAndDelete({_id:id})
        if(!taskForDelete) return res.status(400).json({message:"Task not found"})
        res.status(200).json({message:"Task deleted successfully"})

    } catch (error) {
    console.error("deleteTask error", error);
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
    console.error("updateTaskStatus error", error);
    res.status(500).json({ message: "Server error" });
    }
}


module.exports = {
    createTask,getAllTasks, getTaskById, updateTask,deleteTask, updateTaskStatus
}