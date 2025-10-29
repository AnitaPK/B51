const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String},
    projectId:{type:mongoose.Schema.Types.ObjectId, ref:"Project",require:true},
    addedBy:{type:mongoose.Schema.Types.ObjectId, ref:"User", require:true},
     startDate:{type:Date},
    endDate:{type:Date},
    status:{type:String , enum:['Planned', 'In Progress', 'Completed'], default:'Planned'},
    priority:{type:String, enum:['Low', 'Medium', 'High'], default:'Low'},
    assignTo:{type:mongoose.Schema.Types.ObjectId, ref:"User", require:true}
},{timestamps:true} )

module.exports = mongoose.model('Task', taskSchema)