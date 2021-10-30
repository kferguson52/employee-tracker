const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: process.env.DB_PW,
      database: 'employee'
    },
    console.log(`Connected to the inventory_db database.`)
  );

db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });