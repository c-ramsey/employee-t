const inquirer = require('inquirer');
const dbQueries = require('./dbQueries');

// Function to display the main menu
function displayMainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuOption',
        message: 'Select an option:',
        choices: [
          'View all departments',
          'Add a department',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menuOption) {
        case 'View all departments':
          dbQueries.getAllDepartments()
            .then((departments) => {
              console.log(departments);
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
            .then((answers) => {
              dbQueries.addDepartment(answers.departmentName)
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
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the displayMainMenu function to start the application
displayMainMenu();
