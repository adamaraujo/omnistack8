const express = require('express'); // Importando express
const mongoose = require('mongoose'); // Importando conexão do banco de dados
const routes = require('./routes'); // Importando o arquivo de rotas
const cors = require('cors'); // Permitir acesso da aplicação por qualquer endereço (ex.: React)

const server = express(); // Cria um novo server

mongoose.connect('mongodb+srv://adam:adam@cluster0-yz7y2.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); // Porta que o server escuta