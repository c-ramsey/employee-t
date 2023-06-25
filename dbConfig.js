const mysql = require('mysql2');

// Create and export the database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Stinkygoo1!',
  database: 'employee-t',
});

module.exports = pool;
