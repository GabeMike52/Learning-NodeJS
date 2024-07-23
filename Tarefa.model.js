const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Tarefa = sequelize.define('Tarefa', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

//Exportar modelo
module.exports = Tarefa;