var mysql = require("mysql");
var inq = require("inquirer");
var table = require("console.table");
var add = require("./lib/addEmployee");
var update = require("./lib/updateEmployee");
var view = require("./lib/viewEmployee");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "company_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    exports.start();
});

exports.start = () => {
    inq.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "View All Employees",
                "Add an Employee",
                "Update an Employee Position",
                "Close this application"
            ]
        }
    ])
        .then(function (answer) {
            if (answer.choice === "View All Employees") {
                view.viewAllEmployees();
            }
            else if (answer.choice === "Add an Employee") {
                add.addEmployee();
            }
            else if (answer.choice === "Update an Employee Position") {
                update.updatePosition();
            }
            else if (answer.choice === "Close this application") {
                connection.end();
                return
            }
        });

};