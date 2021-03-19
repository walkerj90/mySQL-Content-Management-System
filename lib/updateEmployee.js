var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "eumamgreshit5",
    database: "company_db"
});