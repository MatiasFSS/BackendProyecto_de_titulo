const mysql = require('mysql2');
const config = require('../config');
//const { error } = require('../red/respuesta');
//const { Pregunta } = require('../modulos/Trivias');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200)
        }else{
            console.log('DB conectada!!!!')
        }
    })

    conexion.on('error', err => {
        console.log('[db err]', err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    })
}


conMysql();

//FUNCIONES MOSTRAR-ELIMINAR-ACTUALIZAR-CREAR PARA TODOS
function MostrarTodo(tabla){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
}

function MostrarItem(tabla, id){ 
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
}


function CrearItem (tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data], (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
    
}

function EliminarItem (tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (error, result) => {
            return console.log(error) ? reject(err): resolve(result)
        })
    });
}
function ActualizarItem (tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
}

//FUNCIÓN PARA ENCICLOPEDIA
function MaterialItem(tabla, nombre_material){ 
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE nombre_material = ?`, [nombre_material], (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
}

//FUNCIÓN PARA TUTORIALES
function Tutorial(tabla, nombre_tutorial){ 
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE nombre_tutorial = ?`, [nombre_tutorial], (error, result) => {
            return error ? reject(err): resolve(result)
        })
    });
}

function trivias(tabla, dificultad){ 
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE dificultad = ?`,[dificultad], (error, result) => {
            console.log(dificultad)
            return error ? reject(err): resolve(result)
            
        })
    });
}




module.exports ={
  MostrarTodo,
  MostrarItem,
  CrearItem,
  EliminarItem,
  ActualizarItem,
  MaterialItem,
  Tutorial,
  trivias
  
}