const TABLA = 'tutoriales'

module.exports = function(dbInyectada) {

    let db = dbInyectada;
    
    if(!db){
        db = require('../../DB/mysql')
    }


    function MostrarItem(id){
        return db.MostrarItem(TABLA,id)
    }

    function Tutorial(nombre_tutorial){
        return db.Tutorial(TABLA,nombre_tutorial)
    }
    
   

    return{
        MostrarItem,
        Tutorial

    }
}