var express = require('express');
var fs = require('fs');
var https = require('https');
var cors = require('cors');

var options = {
    key: fs.readFileSync('./ssl/private/name-key.pem'),
    cert: fs.readFileSync('./ssl/name-cert.pem'),
    ca: fs.readFileSync('./ssl/cacert.pem'),
    requestCert: false,
    rejectUnauthorized: true
};

var app = express();

// Configure o middleware cors para permitir solicitações de todas as origens
app.use(cors());

const { getAllUsers, getUserById, addUser, updateUser, deleteUser,getAllCarrinho,getProductById,getUserEmail } = require('./connection');

// Configure o Express
app.set('port', process.env.PORT || 443); // Define a porta

// Defina os middlewares
app.use(express.json()); // Analise corpos JSON
app.use(express.urlencoded({ extended: false })); // Analise corpos codificados em URL

// Crie um servidor HTTPS usando o Express e as opções SSL/TLS
var server = https.createServer(options, app);

// Comece a escutar as solicitações HTTPS recebidas
server.listen(app.get('port'), function () {
    console.log("Servidor iniciado na porta: " + app.get('port'));
});

// Define routes
app.get('/', function (req, res) {
    res.send('Hello, HTTPS!');
});

app.get('/users', function (req, res) {
    getAllUsers()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            res.status(500).send('Erro ao obter usuários');
        });
});

app.get('/users/:id', function (req, res) {
    const userId = req.params.id;
    getUserById(userId)
        .then(user => {
            res.json(user);
        })
        .catch(error => {
            res.status(500).send('Erro ao obter usuário');
        });
});

app.get('/users/:email/:pass', function (req, res) {
    const userEmail = req.params.email;
    const userPass = req.params.pass;
    getUserEmail(userEmail,userPass)
        .then(user => {
            res.json(user);
        })
        .catch(error => {
            res.status(500).send('Erro ao obter usuário');
        });
});

app.post('/users', function (req, res) {
    const user = req.body;
    addUser(user)
        .then(insertId => {
            res.json({ message: `Usuário adicionado com ID: ${insertId}` });
        })
        .catch(error => {
            res.status(500).send('Erro ao adicionar usuário');
        });
});

app.put('/users/:id', function (req, res) {
    const userId = req.params.id;
    const user = req.body;
    updateUser(user, userId)
        .then(affectedRows => {
            res.json({ message: `Usuário atualizado com sucesso` });
        })
        .catch(error => {
            res.status(500).send('Erro ao atualizar usuário');
        });
});

app.delete('/users/:id', function (req, res) {
    const userId = req.params.id;
    deleteUser(userId)
        .then(affectedRows => {
            res.json({ message: `Usuário deletado com sucesso` });
        })
        .catch(error => {
            res.status(500).send('Erro ao deletar usuário');
        });
});




app.get('/cart/:userId', function (req, res) {
    const userId = req.params.userId;
    getAllCarrinho(userId)
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.status(500).send('Erro ao buscar itens no carrinho');
    });
});

getProductById

module.exports = app;
