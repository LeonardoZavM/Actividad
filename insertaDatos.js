import Database from "better-sqlite3";
const db = new Database('app.db')

const data=[
    {Nombre:"ana",Username:"an1"},
    {Nombre:"juan",Username:"ju2"},
    {Nombre:"bety",Username:"be3"},
    {Nombre:"paco",Username:"pa0"},
    {Nombre:"luis",Username:"lu5"}
]
const insertData=db.prepare(`INSERT OR IGNORE INTO users(Nombre,Username) values(?,?)`)

data.forEach(user=>{
    const r=insertData.run(user.Nombre, user.Username)
    console.log(r)
})

const addDepartment=[
    {Name:"Finanzas"},
    {Name:"T.I"}
]
const insertDepartment = db.prepare(`INSERT OR IGNORE INTO departments (Name) VALUES (?)`);


addDepartment.forEach(department=>{
    const r=insertDepartment.run(department.Name)
    console.log(r)
})

const addEmployee=[
    {Name:"Montserrat", ID:"001"},
    {Name:"Bryan" , ID:"002"}
]
const insertEmployee = db.prepare(`INSERT OR IGNORE INTO employees (Name, ID) VALUES (?, ?)`);

addEmployee.forEach(employee=>{
    const r=insertEmployee.run(employee.Name, employee.ID)
    console.log(r)
})

db.close()