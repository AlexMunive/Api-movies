// ? const dotenv = require('dotenv').config()config
// ? dotenv.config() 

// TODO: habilita acceder a las variables de entorno de mi .env
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'alexmunive.0213',
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME
    }
}

module.exports = config