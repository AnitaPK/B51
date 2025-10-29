const Project = require('../models/projectModel')


async function createProject(req,res){
    const {name,description, startDate, endDate, addedBy} = req.body
    try {
            const newProject = await Project.create({name,description, startDate, endDate, addedBy})
            await newProject.save()
            res.status(200).json({message:"Project added successfully"})
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getAllProject(req,res){
    try {
        const allProjects = await Project.find()
            res.status(200).json({projects:allProjects})
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function getProjectById(req,res){
    const id = req.params.id
    try {
        const project = await Project.findOne({_id:id})
            res.status(200).json({project:project})
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
} 
async function udateProject(req,res){
    const {name,description, startDate, endDate} = req.body
    const id = req.params.id
    try {
        const updatedProject = await Project.findByIdAndUpdate({_id:id}, {name,description, startDate, endDate})
            updatedProject.save()
        if(!updatedProject) return res.status(400).json({message:"Project not updated"})
        res.status(200).json({message:"Project updated successfully"})
        
    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function deleteProject(req,res){
    try {
         const id = req.params.id
         const projectForDelete = await Project.findByIdAndDelete({_id:id})
        res.status(200).json({message:"Project deleted successfully"})

    } catch (error) {
    console.error("createUser error", error);
    res.status(500).json({ message: "Server error" });
    }
}






module.exports ={
    createProject,getAllProject, getProjectById, udateProject, deleteProject
}