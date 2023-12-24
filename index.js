const express = require('express');
const db = require('./config/db');

const Usuario = require('./models/User')
const Gestor = require('./models/Gestor')

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

app.get("/gestores", async (req, res) => {
    await Gestor.findAll()
    .then((gestores) => {
        return res.json({
            erro: false,
            gestores
        });
    }).catch((error) => {
        return res.json({
            erro: false,
            errorType: error,
            mensagem: "error :("
        });
    });
})

app.post("/gestores", async (req, res) => {
    await Gestor.create(req.body)
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

app.listen(8080, () => {
    console.log('Servidor porta: 8080')
});