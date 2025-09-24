const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')


const Category = sequelize.define('Category',{
    cName : {
        type:DataTypes.STRING,
        allowNull:false
    }
})


module.exports = Category