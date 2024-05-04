const TABLA = 'trivias'

module.exports = function(dbInyectada) {

    let db = dbInyectada;
    
    if(!db){
        db = require('../../DB/mysql')
    }

    function trivias(dificultad){
        return db.trivias(TABLA, dificultad)
    }


    
   

    return{
       trivias,
    }
}