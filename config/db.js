const Sequelize = require('sequelize');
const fs = require('fs');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_ONlmKkM0xkmdiaL9Sx4', {
    host: 'mysql-1521c885-edson-b38a.a.aivencloud.com',
    port: '20301',
    dialect: 'mysql',
    ssl: {
        ca: fs.readFileSync(__dirname + '/certs/ca.pem')
    }
});

// sequelize.authenticate()
// .then(function(){
//     console.log('sucesso')
// })
// .catch(function(){
//     console.log('error')
// });

module.exports = sequelize;