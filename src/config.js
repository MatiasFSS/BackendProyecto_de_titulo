require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 5000
    }, 
    mysql: {
        host: process.env.MYSQLHOST || "sql.freedb.tech",
        user: process.env.MYSQLUSER || "freedb_matias",
        password: process.env.MYSQLPASSWORD || "J%fVKs37XqZpf87",
        database: process.env.MYSQLDATABASE || "freedb_proyecto_titulo",
    
    }
}