const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')


const Brand = sequelize.define('Brand',{
    bName : {
        type:DataTypes.STRING,
        allowNull:false
    }
})


module.exports = Brand