require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 5000,
    }, 
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'proyecto_titulo',
        port: process.env.MYSQL_PORT  || 3306
    }
}