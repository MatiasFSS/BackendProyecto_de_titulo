const express = require('express');
const morgan = require('morgan')
const config = require('./config');

const enciclopedia = require('./modulos/Enciclopedia/rutas')
const tutoriales = require('./modulos/Tutoriales/rutas')
const trivias = require("./modulos/Trivias/rutas")
const pregunta = require("./modulos/Pregunta/rutas")

const error = require('./red/errors')

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//config
app.set('port', config.app.port);

//rutas
app.use('/enciclopedia', enciclopedia)
app.use('/tutoriales', tutoriales)
app.use('/trivias',trivias)
app.use('/pregunta',pregunta)

app.use(error)

module.exports = app;