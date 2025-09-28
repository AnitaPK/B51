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

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// for table update 
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Tables altered successfully ."))
  .catch(err => console.error("❌ Sync error:", err));

module.exports = sequelize 