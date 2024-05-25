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

// Use o middleware cors
app.use(cors());

const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('./connection');

// Configure the Express app
app.set('port', process.env.PORT || 443); // Set the port

// Define middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Create an HTTPS server using the Express app and SSL/TLS options
var server = https.createServer(options, app);

// Start listening for incoming HTTPS requests
server.listen(app.get('port'), function () {
    console.log("Started listening");
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
    // Aqui você deveria implementar a lógica para buscar os itens do carrinho do usuário
    res.json([
        // Exemplo de resposta
        { product_name: 'Produto 1', quantity: 2, price: 50 },
        { product_name: 'Produto 2', quantity: 1, price: 30 }
    ]);
});

module.exports = app;
