const Sequelize = require('sequelize');
const fs = require('fs');

const key = `
-----BEGIN CERTIFICATE-----
MIIEQDCCAqigAwIBAgITcAtcFiSYRUxTIirf9oSEFV7CZjANBgkqhkiG9w0BAQwF
ADA6MTgwNgYDVQQDDC9lOGJmYjRkYy01MjZiLTQyY2YtYjNjMS04MmEwMDQyMzYy
ZmUgUHJvamVjdCBDQTAeFw0yMzEyMDIwMTA1MjJaFw0zMzExMjkwMTA1MjJaMDox
ODA2BgNVBAMML2U4YmZiNGRjLTUyNmItNDJjZi1iM2MxLTgyYTAwNDIzNjJmZSBQ
cm9qZWN0IENBMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAwBNhYN9Q
eJO9wItQl+X3dnjMBYAsYNIq2qeY8zn0pI0L2/x9QCa7iXZme7wcubG0uFPCU5E+
kyWFTuKFZ9h/xQI20zyD3W3yA+/pfC06RkRoMluxPgaZ8LdxqKn+A7EjrM4DX256
X4MDuypGIfWWIK10Ubo3jB8ZgmFmbmBN1+FTCoBw4L44MKeA/qiHmlIBKIiJqAjW
or9IX8pJpGjmh4Bl5/OubrRXtCd1COm45/Q9RoPTVN5no6ggjba1nv5DupDmY/zF
FuJpTtxk/E31jSuyjzfC4REBagNGH0bGVW2TwZT+zlKZau2TbR9BQ04xrleJdKPd
wnC2tyqJqmxqdwq3Mij2j00py36SgEgKmxnioO0Luei+MinYXsHjUicTtVmTxmqA
MY/PhkXwgV+QZg9Fr7LnHFVVjU1NPdBL6yoTF4U0ZT2eT4frihrsdVA8kIhGI6af
g0NI61lx1Mp5lqg61BS2qbpA1hgmDQXmR4JzUMcKLr7DPb5c/8ZpBCP5AgMBAAGj
PzA9MB0GA1UdDgQWBBQxBoVXhpIsqgQXWBMlOeAxY8WcqjAPBgNVHRMECDAGAQH/
AgEAMAsGA1UdDwQEAwIBBjANBgkqhkiG9w0BAQwFAAOCAYEAirPBpZy399oaZY5P
LKZ2ktXGptF8bE3u4AzUrMey4PToZBT0wSaifVEZYWECdl19Q2PKTnKvfi2qdLkB
9aT8aniIEsVsxtR7gX31gwGNLlPmXX4F9epgneAxTv43mC0M5xUZ8y4c3kNXRieS
SApGgtSWdjM9JU5F+GVbDASP9oco152HijmXJ0GY3e0rgGd6DWNBrienRTdMrLU4
ieERbZrc8H0/cKUT0GZZBtdN6uW7OJ8/XyFVzxDGhEeBd75EnM8VUaUxs74vCj3Z
vkAm10Pv4pOyP795DszhGOs/PH9BCsQfPtyPaSRv/XBE3dsNqp58INBw3pJnYvrv
VMPYdzXRuDj+gJXPPIuwMAbEc2XOzUG1Qc/Mj9iKWywVohIqYnTKopTTj0iwQxHa
hB38xUkZIrntttykKwNc5Rl0+X7WyJG/7ho/KIUjIuclwPgNfq7j1Pu5tSDs7E4A
TTT+0LW0bEpFramXHn+RCdeyhjkGh70IhZJ1nC2vtrAL8qV7
-----END CERTIFICATE-----
`
const key1 = fs.readFileSync(__dirname + '/certs/ca.pem');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_ONlmKkM0xkmdiaL9Sx4', {
    host: 'mysql-1521c885-edson-b38a.a.aivencloud.com',
    port: '20301',
    dialect: 'mysql',
    ssl: {
        ca: key
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