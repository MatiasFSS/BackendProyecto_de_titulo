const express = require('express');
const controlador = require('./index');
const respuestas = require('../../red/respuesta');
const router = express.Router();

//router.get('/', MostrarTodo)
//router.get('/:id', MostrarItem)
router.get('/dificultad/:dificultad',trivias)
//router.get('/:dificultad',preguntaIntermedia)
//router.get('/:dificultad',preguntaDificil)


async function trivias(req, res){
    try{
        const items = await controlador.trivias(req.params.dificultad)
        console.log(items)
        const cadenaJSON = JSON.stringify(items)
        //const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaJSON, 200)
        
    }catch(err){
        respuestas.error(req, res, err, 500);
    }
};



module.exports = router