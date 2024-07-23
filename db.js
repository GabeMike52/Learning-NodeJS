const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory');
//async 
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado com o banco de dados.');
    } catch (e) {
        console.log('ERROR');
    }
};

testConnection();

module.exports = sequelize;