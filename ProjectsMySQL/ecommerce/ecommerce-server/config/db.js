const {Sequelize} = require('sequelize')

require("dotenv").config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql",
        logging:false
    }
)


module.exports = sequelize