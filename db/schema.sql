DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    INDEX department_index(department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    INDEX role_index(role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    INDEX employee_index(manager_id),
    CONSTRAINT fk_employee FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);



