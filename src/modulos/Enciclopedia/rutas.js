const express = require('express');
const controlador = require('./index');
const respuestas = require('../../red/respuesta');
const router = express.Router();

router.get('/', MostrarTodo)
router.get('/:id', MostrarItem)
router.get('/nombre_material/:nombre_material', MaterialItem)




async function MostrarTodo(req, res){
    try{
        const items = await controlador.MostrarTodo()
        const cadenaJSON = JSON.stringify(items)
        const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaSinCorchetes, 200)
        
    }catch(err){
        respuestas.error(req, res, err, 500);
    }
};

async function MostrarItem (req, res){
    try{
        const items = await controlador.MostrarItem(req.params.id)
        console.log(req.params.id)
        const cadenaJSON = JSON.stringify(items)
        const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaSinCorchetes, 200)
    }catch(err){
        respuestas.error(req, res, err, 500);
    }
};

async function MaterialItem (req, res){
    try{
        const items = await controlador.MaterialItem(req.params.nombre_material)
        console.log(req.params.nombre)
        const cadenaJSON = JSON.stringify(items)
        const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaSinCorchetes, 200)
    }catch(err){
        respuestas.error(req, res, err, 500);
    }
};



module.exports = router