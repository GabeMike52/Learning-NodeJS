const express = require('express');
const Tarefa = require('./Tarefa.model');
const sequelize = require('./db');

const app = express();

//Faz o express entender JSON
app.use(express.json());

//Caminho para o Endpoint
app.get('/tarefas', async (req, res) => {
    //Depois do endpoint ser chamado execute esse código
    //Responde a requisição utilziando o response ou res.
    try{
        const tarefas = await Tarefa.findAll();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ error: error.mesage });
    }
});

//CRIAR TAREFA
app.post('/tarefas', async(req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body);
        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Porta da base URL
const port = 3000;
sequelize.sync().then(() => {
    app.listen(port, () => {
    console.log('Servidor rodando na URL http://localhost:' + port); //base URL
    });
});