# mySQL-Content-Management-System

Employee Tracking and Management using Node, Inquirer and mySQL. This application was created to allow the user to update and manage their employees id's, titles, names and departments through the use of a SQL database and javascript UI. 

----------------------

## Installation
Clone a repository; once cloned run npm install to download the necessary files to run this application. Load the seed.sql and the schema.sql into MySQLWorkbench.

## Usage
 After SQL is properly set up, type run node app.js into the terminal. Afterwards you should be prompted with three options and an exit option.
 * View All Employees
 * Add an Employee
 * Update Employees Role 

![cms](https://user-images.githubusercontent.com/72112742/111742176-e79e5880-8844-11eb-83bf-c7dd2088d439.gif)

----------------------


* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```


