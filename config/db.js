const Sequelize = require('sequelize');
const fs = require('fs');
const dotenv = require('dotenv');

require('dotenv').config()

// const key1 = fs.readFileSync(__dirname + '/certs/ca.pem');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    ssl: {
        ca: process.env.PRIVATE_KEY
//        ca: key
        // ca: fs.readFileSync(__dirname + '/certs/ca.pem')
    }
});

// console.log("Chave1 \n" + key1)

// sequelize.authenticate()
// .then(function(){
//     console.log('sucesso')
// })
// .catch(function(){
//     console.log('error')
// });

module.exports = sequelize;