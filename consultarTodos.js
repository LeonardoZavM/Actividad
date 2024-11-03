import Database from "better-sqlite3";
const db = new Database('app.db')

const usersquery = "select * from users;"
const employeesquery = "SELECT * FROM employees;";
const departmentsquery = "SELECT * FROM departments;";

// Ejecuta cada consulta y almacena los resultados
const users = db.prepare(usersquery).all();
const employees = db.prepare(employeesquery).all();
const departments = db.prepare(departmentsquery).all();

db.close()

console.log("Users:", users);
console.log("Employees:", employees);
console.log("Departments:", departments);