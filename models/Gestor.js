const Sequelize = require('sequelize');
const db = require('../config/db');

const Gestor = db.define('gestores', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
});

User.sync();

module.exports = Gestor;