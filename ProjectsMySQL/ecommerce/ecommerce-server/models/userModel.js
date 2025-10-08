const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const bcrypt = require('bcryptjs')

const User = sequelize.define('User',{
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
        //it should unique
    }, 
    mobileNumber:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    password:{
        type:DataTypes.STRING,
        allowNull:false
    } , 
    role:{
        type:DataTypes.ENUM("Admin", "User"),
        defaultValue:"User"
        // ["admin", "user"]
    } 

})

User.beforeCreate(async(user)=>{
    salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})

module.exports = User