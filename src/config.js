require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 3306
    }, 
    mysql: {
        host: process.env.MYSQL_HOST || 'sql.freedb.tech',
        user: process.env.MYSQL_USER || 'freedb_matias',
        password: process.env.MYSQL_PASSWORD || "J%J%fVKs37XqZpf87",
        database: process.env.MYSQL_DB || "freedb_proyecto_titulo",
    
    }
}