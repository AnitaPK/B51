const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    role: {type:String, enum:['admin', 'member'], default:'member'},
    avatar:{type:String}
}, { timestamps: true })


module.exports = mongoose.model('User', UserSchema)