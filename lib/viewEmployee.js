var mysql = require("mysql");
var app = require("../cms");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "company_db"
});

exports.viewAllEmployees = () => {
    var queryString = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
        "e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
        "FROM employees AS E " +
        "INNER JOIN company_position AS C ON E.emp_position_id = c.position_id " +
        "INNER JOIN department AS D ON C.dept_id = d.dept_id " +
        "LEFT JOIN employees AS E2 ON E.manager_id = E2.emp_id;";

    connection.query(queryString, function (err, res) {
        if (err) { throw err }

        console.table(res)

        app.start();
    });
};

exports.getAllPositions = (cb) => {
    connection.query("SELECT * FROM company_position", function (err, results) {
        if (err) throw err;
        cb(results);
    });
}

exports.getAllDepartments = (cb) => {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        cb(results);
    });
}

exports.getAllEmployees = (cb) => {
    connection.query("SELECT * FROM employees", function (err, results) {
        if (err) throw err;
        cb(results);
    });
}