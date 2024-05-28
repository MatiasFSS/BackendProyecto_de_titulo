const express = require('express')
const controlador = require('./index')
const respuestas = require('../../red/respuesta')
const router = express.Router()

router.get('/',MostrarTodo)

async function MostrarTodo(req, res){
    try{
        const items = await controlador.MostrarTodo()
       
        const cadenaJSON = JSON.stringify(items)
        //const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaJSON, 200)
    }catch(err){
        respuestas.error(req, res, err, 500)
    }
}
module.exports = router