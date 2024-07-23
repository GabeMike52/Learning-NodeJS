const sequelize = require('./db');

const Tarefa = require('./Tarefa.model');

const syncDB = async () => {
    try{
        await sequelize.sync({ force: true });
    } catch (error) {
        console.log('ERROR');
    }
}