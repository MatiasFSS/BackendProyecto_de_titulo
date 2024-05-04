const express = require('express');
const controlador = require('./index');
const respuestas = require('../../red/respuesta');
const router = express.Router();


router.get('/:id', MostrarItem)
router.get('/nombre_tutorial/:nombre_tutorial', Tutorial)




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

async function Tutorial(req, res){
    try{
        const items = await controlador.Tutorial(req.params.nombre_tutorial)
        console.log(req.params.nombre_tutorial)
        const cadenaJSON = JSON.stringify(items)
        const cadenaSinCorchetes = cadenaJSON.slice(1,-1)
        respuestas.success(req, res, cadenaSinCorchetes, 200)
    }catch(err){
        respuestas.error(req, res, err, 500);
    }
};



module.exports = router