import Database from "better-sqlite3";
const db = new Database('app.db')

const usersquery = "select * from users where ID=?;"
const employeesquery = "select * from employees where ID=?;"
const departmentsquery = "select * from departments where ID=?;"
//ejecutamos sentencia con el parámetro 1 el parametro 1
const users = db.prepare(usersquery).get([1])
const employees = db.prepare(employeesquery).get([1])
const departments = db.prepare(departmentsquery).get([1])

db.close()

console.log("Users:", users);
console.log("Employees:", employees);
console.log("Departments:", departments);