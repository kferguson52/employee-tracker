const inquirer = require("inquirer");
const cTable = require("console.table");
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "actions",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.actions) {
        case "view all departments":
          function viewAllRoles() {
            db.query("SELECT * FROM department", (err, rows) => {
              console.table(rows);
            });
          }
          break;
        case "view all roles":
          // viewAllRoles();
          break;
        case "view all employees":
          // viewAllRoles();
          break;
        case "add a department":
          // viewAllRoles();
          break;
        case "add a role":
          // viewAllRoles();
          break;
        case "add an employee":
          viewAllRoles();
          break;
        case "update an employee role":
          viewAllRoles();
          break;
      }
    });
};

promptUser();
