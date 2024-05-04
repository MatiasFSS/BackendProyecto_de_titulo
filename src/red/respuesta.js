exports.success = function(req, res, mensaje = '', status = 200){

    res.status(status).send(mensaje)
}

exports.error = function(req, res, mensaje = 'Error Interno', status = 500){

    res.status(status).send({
        error: true,
        status: status,
        body: mensaje

    })
}