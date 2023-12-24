const Sequelize = require('sequelize');
const db = require('../config/db');

const Gestor = db.define('gestores', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
});

Gestor.sync();

module.exports = Gestor;