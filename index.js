import inquirer from 'inquirer';

import {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  insertDepartment,
  insertRole,
  insertEmployee,
  updateEmployeeRole,
} from './dbQueries';

// Your remaining code here


const dbQueries = require('./dbQueries');

function displayMainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuOption',
        message: 'Select an option:',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menuOption) {
        case 'View all departments':
          dbQueries.getAllDepartments()
            .then((departments) => {
              console.table(departments);
              displayMainMenu();
            })
            .catch((error) => {
              console.error(error);
              displayMainMenu();
            });
          break;

        case 'View all roles':
          dbQueries.getAllRoles()
            .then((roles) => {
              console.table(roles);
              displayMainMenu();
            })
            .catch((error) => {
              console.error(error);
              displayMainMenu();
            });
          break;

        case 'View all employees':
          dbQueries.getAllEmployees()
            .then((employees) => {
              console.table(employees);
              displayMainMenu();
            })
            .catch((error) => {
              console.error(error);
              displayMainMenu();
            });
          break;

        case 'Add a department':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the department name:',
              },
            ])
            .then((departmentAnswers) => {
              dbQueries.insertDepartment(departmentAnswers.departmentName)
                .then(() => {
                  console.log('Department added successfully!');
                  displayMainMenu();
                })
                .catch((error) => {
                  console.error(error);
                  displayMainMenu();
                });
            });
          break;

          case 'Add a role':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'title',
                  message: 'Enter the role title:',
                },
                {
                  type: 'input',
                  name: 'salary',
                  message: 'Enter the role salary:',
                },
                {
                  type: 'input',
                  name: 'departmentId',
                  message: 'Enter the department ID:',
                },
              ])
              .then((roleAnswers) => {
                dbQueries
                  .insertRole(roleAnswers.title, roleAnswers.salary, roleAnswers.departmentId)
                  .then(() => {
                    console.log('Role added successfully!');
                    displayMainMenu();
                  })
                  .catch((error) => {
                    console.error(error);
                    displayMainMenu();
                  });
              });
            break;
          
          case 'Add an employee':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'firstName',
                  message: 'Enter the employee\'s first name:',
                },
                {
                  type: 'input',
                  name: 'lastName',
                  message: 'Enter the employee\'s last name:',
                },
                {
                  type: 'input',
                  name: 'roleId',
                  message: 'Enter the employee\'s role ID:',
                },
                {
                  type: 'input',
                  name: 'managerId',
                  message: 'Enter the employee\'s manager ID:',
                },
              ])
              .then((employeeAnswers) => {
                dbQueries
                  .insertEmployee(
                    employeeAnswers.firstName,
                    employeeAnswers.lastName,
                    employeeAnswers.roleId,
                    employeeAnswers.managerId
                  )
                  .then(() => {
                    console.log('Employee added successfully!');
                    displayMainMenu();
                  })
                  .catch((error) => {
                    console.error(error);
                    displayMainMenu();
                  });
              });
            break;
          
          case 'Update an employee role':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the employee ID:',
                },
                {
                  type: 'input',
                  name: 'roleId',
                  message: 'Enter the new role ID:',
                },
              ])
              .then((updateAnswers) => {
                dbQueries
                  .updateEmployeeRole(updateAnswers.employeeId, updateAnswers.roleId)
                  .then(() => {
                    console.log('Employee role updated successfully!');
                    displayMainMenu();
                  })
                  .catch((error) => {
                    console.error(error);
                    displayMainMenu();
                  });
              });
            break;
          
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

displayMainMenu();
