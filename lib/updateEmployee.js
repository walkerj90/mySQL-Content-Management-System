var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../cms");
var view = require("./viewEmployee");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "company_db"
});


exports.updatePosition = () => {
    view.getAllEmployees(function (employeeResults) {
        console.log(employeeResults);
        var employees = [];
        for (var i = 0; i < employeeResults.length; i++) {
            var fullName = {
                name: employeeResults[i].first_name + ' ' + employeeResults[i].last_name,
                value: {
                    id: employeeResults[i].emp_id,
                    firstname: employeeResults[i].first_name,
                    lastname: employeeResults[i].last_name
                }
            };

            employees.push(fullName)
        };

        inq.prompt([
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "employee",
                choices: employees
            }
        ]).then((answers) => {
            view.getAllPositions(function (positionsResults) {
                var positions = [];
                console.log(answers.employee);

                for (var i = 0; i < positionsResults.length; i++) {
                    var fullposition = {
                        name: positionsResults[i].title,
                        value: {
                            id: positionsResults[i].position_id,
                            position: positionsResults[i].title,
                        }
                    }
                    positions.push(fullposition);
                };

                inq.prompt([
                    {
                        type: "list",
                        message: `Which position would you like to update ${answers.employee.firstname} to?`,
                        name: "position",
                        choices: positions
                    }
                ]).then((results) => {
                    console.log("results...")
                    console.log(results.position)
                    connection.query("UPDATE employees SET emp_position_id = ? WHERE emp_id = ?", [results.position.id, answers.employee.id], function (err, results) {
                        if (err) throw err;
                        console.log("Successfully updated " + answers.employee.id);
                        app.start();
                    })
                });
            });
        });
    });
};