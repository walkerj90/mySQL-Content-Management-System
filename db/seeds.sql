INSERT INTO department (dept_name) VALUES ('Warehouse'), ('Office'), ('Management');
INSERT INTO company_role (title, salary, dept_id) VALUES
('General Manager', 80000.00, 3), 
('Head Supervisor', 60000.00, 1),
('Shift Supervisor', 30000.00, 1),
('Office', 30000.00, 1 ),
('Warehouse', 20000.00, 1),                
('Shop Lead', 40000.00, 2),
('Shop', 30000.00, 2),
('Associate', 20000.00, 1);

INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Dan', 'Danson', 1, null),
('Jennifer', 'Jenson', 6, 1),
('Andy', 'Anderson', 2, null);
