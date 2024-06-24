const {Sequelize} = require('sequelize')
module.exports = new Sequelize(
    process.env.DB_NAME, // Nazvanie BD
    process.env.DB_USER, // Polzovatel
    process.env.DB_PASSWORD, // PArol
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)