require('dotenv').config()
const mysql = require('mysql')
const connection = mysql.createConnection({
    host     :process.env.HOST,
    user     :process.env.USER,
    password :process.env.PASSWORD,
    database :process.env.DB_NAME
})

connection.connect(function(err) {
  if (err) {
    console.error('error while connecting: ' + err.stack);
    return;
  }
 
  console.log('database connected successfully');
});


module.exports = connection