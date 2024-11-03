import Database from "better-sqlite3";
const db = new Database('app.db');
const updateDepartment = db.prepare(`UPDATE departments SET name = ? WHERE id = ?`)
const updateEmployee = db.prepare(`UPDATE employees SET name = ? WHERE id = ?`)
const updateUsers = db.prepare(`UPDATE users SET Nombre = ? WHERE id = ?`)

function editDepartment(id, name) {
    const result = updateDepartment.run(name, id);
    return result.changes > 0; // Devuelve true si se actualizó algo
}

function editEmployee(id, name) {
    const result = updateEmployee.run(name, id);
    return result.changes > 0; 
}

function editUsers(id, name) {
    const result = updateUsers.run(name, id);
    return result.changes > 0; 
}


const departmentIdToEdit = 2;
const employeeIdToEdit = 1;
const usersIdToEdit = 1;  

if (editDepartment(departmentIdToEdit, "Soporte Tecnico")) {
    console.log(`Departamento con ID ${departmentIdToEdit} actualizado exitosamente.`);
} else {
    console.log(`No se encontró el departamento con ID ${departmentIdToEdit}.`);
}

if (editEmployee(employeeIdToEdit, "Mia", 1)) {
    console.log(`Empleado con ID ${employeeIdToEdit} actualizado exitosamente.`);
} else {
    console.log(`No se encontró el empleado con ID ${employeeIdToEdit}.`);
}

if (editUsers(usersIdToEdit, "Paola", 7)) {
    console.log(`Usuario con ID ${usersIdToEdit} actualizado exitosamente.`);
} else {
    console.log(`No se encontró el usuario con ID ${usersIdToEdit}.`);
}

db.close();