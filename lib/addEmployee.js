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

exports.addEmployee = () => {
    view.getAllPositions(function (positionsResults) {
        var positions = [];
        for (var i = 0; i < positionsResults.length; i++) {
            positions.push(positionsResults[i].title);
        }
        var options = [
            {
                type: "input",
                message: "Employee First Name",
                name: "firstName",
                default: "Steven"
            },
            {
                type: "input",
                message: "Employee Last Name",
                name: "lastName",
                default: "Stevenson"
            },
            {
                type: "list",
                message: "Employee Position",
                name: "Position",
                choices: positions
            }
        ];

        inq.prompt(options)
            .then((answers) => {
                var position_id = null;
                for (var i = 0; i < positionsResults.length; i++) {
                    if (positionsResults[i].title === answers.position) {
                        emp_id = positionsResults[i].position_id
                    }
                }
                connection.query("INSERT INTO employees SET ?",
                    {
                        first_name: answers.firstName,
                        last_name: answers.lastName,
                        emp_id: position_id
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("Successfully added " + answers.firstName + " " + answers.lastName);
                        app.start();
                    });
            });
    });
};