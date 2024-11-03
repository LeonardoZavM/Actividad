import Database from "better-sqlite3";
const db = new Database('app.db');
const deleteDepartment = db.prepare(`DELETE FROM departments WHERE id = ?`)
const deleteEmployee = db.prepare(`DELETE FROM employees WHERE id = ?`)
const deleteUsers = db.prepare(`DELETE FROM users WHERE id = ?`)

function removeDepartment(id) {
    const result = deleteDepartment.run(id);
    return result.changes > 0;
}

function removeEmployee(id) {
    const result = deleteEmployee.run(id);
    return result.changes > 0;
}

function removeUsers(id) {
    const result = deleteUsers.run(id);
    return result.changes > 0;
}

// Ejemplo de uso
const departmentIdToDelete = 1; 
const employeeIdToDelete = 2;
const usersIdToDelete = 3; 

if (removeDepartment(departmentIdToDelete)) {
    console.log(`Departamento con ID ${departmentIdToDelete} eliminado.`);
} else {
    console.log(`No se encontró el departamento con ID ${departmentIdToDelete}.`);
}

if (removeEmployee(employeeIdToDelete)) {
    console.log(`Empleado con ID ${employeeIdToDelete} eliminado.`);
} else {
    console.log(`No se encontró el empleado con ID ${employeeIdToDelete}.`);
}

if (removeUsers(usersIdToDelete)) {
    console.log(`Usuario con ID ${usersIdToDelete} eliminado.`);
} else {
    console.log(`No se encontró el Usuario con ID ${usersIdToDelete}.`);
}

db.close();