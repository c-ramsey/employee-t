const pool = require('./dbConfig');

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

function getAllRoles() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM role', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function getAllEmployees() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM employee', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

function insertDepartment(name) {
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

function insertRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
      [title, salary, departmentId],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
}

function insertEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [firstName, lastName, roleId, managerId],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
}

function updateEmployeeRole(employeeId, roleId) {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE employee SET role_id = ? WHERE id = ?',
      [roleId, employeeId],
      (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      }
    );
  });
}


module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  insertDepartment,
  insertRole,
  insertEmployee,
  updateEmployeeRole,
};
