require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 5000
    }, 
    mysql: {
        host: process.env.MYSQLHOST || "localhost",
        user: process.env.MYSQLUSER || "root",
        password: process.env.MYSQLPASSWORD || "",
        database: process.env.MYSQLDATABASE || "proyecto_titulo",
    
    }
}