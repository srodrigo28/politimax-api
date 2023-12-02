const express = require('express');
const db = require('./config/db');

const Usuario = require('./models/User')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        erro: false,
        nome: 'Api 2023',
        empresa: 'Seb Soluções',
    })
});

app.post("/users", async (req, res) => {
    await Usuario.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Sucesso :)"
        });
    })
    .catch( (error) => {
        return res.json({
            erro: true,
            errorType: error,
            mensagem: "Error :("
        });
    })
});

app.get("/users", async (req, res) => {

    await Usuario.findAll()
    .then((users) => {
        return res.json({
            erro: false,
            users
        });
    }).catch((error) => {
        return res.json({
            erro: false,
            errorType: error,
            mensagem: "error :("
        });
    });
})

app.post("/gestores", (req, res) => {
    return res.json({
        erro: false,
        nome: 'Api 2023',
        empresa: 'Seb Soluções',
    })
});

app.listen(8080, () => {
    console.log('Servidor porta: 8080')
});