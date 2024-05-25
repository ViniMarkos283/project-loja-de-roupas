// var express = require('express');
// var fs = require('fs');
// var https = require('https');

// // Configurações de SSL/TLS
// var options = {
//     key: fs.readFileSync('./ssl/private/name-key.pem'),
//     cert: fs.readFileSync('./ssl/name-cert.pem'),
//     ca: fs.readFileSync('./ssl/cacert.pem'),
//     requestCert: false,
//     rejectUnauthorized: true
// };

// var app = express();
// const { getAllUsers, getUserById, addUser, updateUser, deleteUser, getAllCarrinho } = require('./connection');

// // Configuração do servidor
// app.set('port', process.env.PORT || 443);

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Criação do servidor HTTPS
// var server = https.createServer(options, app);

// // Início do servidor
// server.listen(app.get('port'), function () {
//     console.log("Servidor HTTPS iniciado na porta " + app.get('port'));
// });

// // Rotas

// // Rota raiz
// app.get('/', function (req, res) {
//     res.send('Hello, HTTPS!');
// });

// // Rota para obter todos os usuários
// app.get('/users', function (req, res) {
//     getAllUsers()
//         .then(users => res.json(users))
//         .catch(error => res.status(500).send('Erro ao obter usuários: ' + error));
// });

// // Rota para obter um usuário por ID
// app.get('/users/:id', function (req, res) {
//     const userId = req.params.id;
//     getUserById(userId)
//         .then(user => res.json(user))
//         .catch(error => res.status(500).send('Erro ao obter usuário: ' + error));
// });

// // Rota para adicionar um usuário
// app.post('/users', function (req, res) {
//     const user = req.body;
//     addUser(user)
//         .then(insertId => res.json({ message: 'Usuário adicionado com ID: ' + insertId }))
//         .catch(error => res.status(500).send('Erro ao adicionar usuário: ' + error));
// });

// // Rota para atualizar um usuário
// app.put('/users/:id', function (req, res) {
//     const userId = req.params.id;
//     const user = req.body;
//     updateUser(user, userId)
//         .then(affectedRows => res.json({ message: 'Usuário atualizado', affectedRows }))
//         .catch(error => res.status(500).send('Erro ao atualizar usuário: ' + error));
// });

// // Rota para deletar um usuário
// app.delete('/users/:id', function (req, res) {
//     const userId = req.params.id;
//     deleteUser(userId)
//         .then(affectedRows => res.json({ message: 'Usuário deletado', affectedRows }))
//         .catch(error => res.status(500).send('Erro ao deletar usuário: ' + error));
// });

// // Rota para obter itens do carrinho de um usuário
// app.get('/cart/:user_id', function (req, res) {
//     const userId = req.params.user_id;
//     getAllCarrinho(userId)
//         .then(items => res.json(items))
//         .catch(error => res.status(500).send('Erro ao obter itens do carrinho: ' + error));
// });