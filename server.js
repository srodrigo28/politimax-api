const fs = require('fs');
const mysql = require('mysql2');

var conn = mysql.createConnection({
    host: 'mysql-1521c885-edson-b38a.a.aivencloud.com',
    port: '20301',
    user: 'avnadmin',
    password: 'AVNS_ONlmKkM0xkmdiaL9Sx4',
    database: 'defaultdb',
    ssl: {
        ca: fs.readFileSync(__dirname + '/certs/ca.pem')
    }
});

conn.connect();

// conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });


conn.query('select * from gestores', function (error, results, fields){
    if(error) throw error;
    console.log('Sucesso: ', results[1])
});

conn.end();

const cert = fs.readFileSync(__dirname + '/certs/ca.pem')

console.log('servidor rodando');