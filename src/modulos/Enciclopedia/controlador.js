const TABLA = 'material_reciclable'

module.exports = function(dbInyectada) {

    let db = dbInyectada;
    
    if(!db){
        db = require('../../DB/mysql')
    }

    function MostrarTodo () {
        return db.MostrarTodo(TABLA)
    }

    function MostrarItem(id){
        return db.MostrarItem(TABLA,id)
    }
    function MaterialItem(nombre_material){
        return db.MaterialItem(TABLA,nombre_material)
    }

    
   

    return{
        MostrarTodo,
        MostrarItem,
        MaterialItem

    }
}