// const Sequelize = require('sequelize');

// require('dotenv').config();

// // create connection to our db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

// module.exports = sequelize;

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PW
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});