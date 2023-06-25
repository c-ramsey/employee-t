const pool = require('./dbConfig');

// Function to get all departments
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM department', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

// Function to add a department
function addDepartment(name) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO department (name) VALUES (?)', [name], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

// Export the functions for use in other files
module.exports = {
  getAllDepartments,
  addDepartment,
};
