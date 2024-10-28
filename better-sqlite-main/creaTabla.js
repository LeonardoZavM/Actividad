import Database from "better-sqlite3";
const db = new Database('app.db')

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS users (
    ID INTEGER PRIMARY KEY,
    Nombre TEXT NOT NULL,
    Username TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS departments (
    ID INTEGER PRIMARY KEY,
    Name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS employees (
    ID INTEGER PRIMARY KEY,
    Name TEXT NOT NULL,
    Department_ID INTEGER,
    FOREIGN KEY (Department_ID) REFERENCES departments(ID)
);
`;

db.exec(createTablesQuery);
console.log("Tablas creada exitosamente");
db.close()