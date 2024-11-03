class ModelUsers{
    constructor(controller){
        this.dbController=controller
    }
    /**
     * 
     * @param {*} id entero que representa el id
     * @returns 
     */
    get(id){
        const sql=`select * from users where id=?;`
        this.dbController.open()
        const data = this.dbController.get(sql,[id])
        this.dbController.close()
        return data
    }
    /**
     * Devuelve la lista de todos los usuarios
     * @returns objeto con la lista de datos
     */
    getAll(){
        const sql=`select * from users;`
        this.dbController.open()
        const data = this.dbController.all(sql,[])
        this.dbController.close()
        return data
    }
    /**
     * Inserta un registro en users
     * @param {*} datos arreglo de parametros [name,username]
     * @returns 
     */
    insert(datos){
        const sql='insert into users(name,username) values(?,?)'
        this.dbController.open()
        const data = this.dbController.run(sql,datos)
        this.dbController.close()
        return data
    }

    //agregue el método put para actualizar todos los campos de un registro
    //agregue patch para actualizar un campo específico
    //agregue delete para borrar un registro
}
export default ModelUsers