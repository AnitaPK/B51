const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Category = require('./categoryModel')
const Brand = require('./brandModel')


const Product = sequelize.define('Product',{
    pName: {
        type:DataTypes.STRING,
        allowNull:false
    },
    pDescription:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    catID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    brandID:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

Product.belongsTo(Category,{foreignKey:"catID"})
Category.hasMany(Product, {foreignKey: "id"})

Product.belongsTo(Brand, {foreignKey:'brandID'})
Brand.hasMany(Product,{foreignKey:'id'})

module.exports = Product