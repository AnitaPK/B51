const Project = require('../models/projectModel')


async function createProject(req,res){
    const {name,description, startDate, endDate, addedBy} = req.body
    try {
            const newProject = await Project.create({name,description, startDate, endDate, addedBy})
            await newProject.save()
            res.status(200).json({message:"Project added successfully"})
    } catch (error) {
    console.error("createProject error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function getAllProject(req,res){
    try {
        const allProjects = await Project.find().populate('addedBy', 'name email')
            res.status(200).json({projects:allProjects})
    } catch (error) {
    console.error("getAllProject error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function getProjectById(req,res){
    const id = req.params.id
    try {
        const project = await Project.findOne({_id:id}).populate('addedBy', 'name email')
            res.status(200).json({project:project})
    } catch (error) {
    console.error("getProjectById error", error);
    res.status(500).json({ message: "Server error" });
    }
} 
async function updateProject(req,res){
    const {name,description, startDate, endDate} = req.body
    const id = req.params.id
    try {
        const updatedProject = await Project.findByIdAndUpdate({_id:id}, {name,description, startDate, endDate}, {new: true})
        if(!updatedProject) return res.status(400).json({message:"Project not updated"})
        res.status(200).json({message:"Project updated successfully"})
        
    } catch (error) {
    console.error("updateProject error", error);
    res.status(500).json({ message: "Server error" });
    }
}
async function deleteProject(req,res){
    try {
         const id = req.params.id
         const projectForDelete = await Project.findByIdAndDelete({_id:id})
         if(!projectForDelete) return res.status(400).json({message:"Project not found"})
        res.status(200).json({message:"Project deleted successfully"})

    } catch (error) {
    console.error("deleteProject error", error);
    res.status(500).json({ message: "Server error" });
    }
}

async function updateStatusProject(req,res) {
    const id = req.params.id
    const {status}=req.body

    try{
        const projectForUpdateStatus = await Project.findById(id)
        if(!projectForUpdateStatus) return res.status(400).json({message:"No such project"})
        
        const updatedProjectStatus = await Project.findByIdAndUpdate(id,{status},{new:true} )
        // await updatedProjectStatus.save()
        res.status(200).json({message:"Project status updated successfully"})

        } catch (error) {
    console.error("updateStatusProject error", error);
    res.status(500).json({ message: "Server error" });
    }
}




module.exports ={
    createProject,getAllProject, getProjectById, updateProject, deleteProject, updateStatusProject
}