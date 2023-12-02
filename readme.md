### Links
https://console.aiven.io/account/a4790e1df8f6/project/edson-b38a/services/mysql-1521c885/overview

### Dados da conexão

### Dependências
* mysql2
npm i mysql2

* sequelize
npm i sequelize -D

### Conexão Exemplo
const fs = require('fs');
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'mysql-1521c885-edson-b38a.a.aivencloud.com',
    port: '20301',
    user: 'avnadmin',
    password: 'AVNS_ONlmKkM0xkmdiaL9Sx4',
    database: 'defaultdb',
    ssl: {
        ca: fs.readFileSync(__dirname + '/certs/ca.pem')
    }
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
   
connection.end();