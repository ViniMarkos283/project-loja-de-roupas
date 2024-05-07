var express = require('express');

var fs = require('fs');

var https = require('https');

var options = {
    key: fs.readFileSync('./ssl/private/name-key.pem'),
    cert: fs.readFileSync('./ssl/name-cert.pem'),
    ca: fs.readFileSync('./ssl/cacert.pem'),
    requestCert: false,
    rejectUnauthorized: true
};


// const router = express.Router();
// const controller = require('../controllers/personController')
// router.post('/', controller.post);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);
// module.exports = router;




var app = express();

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

// Define routes
app.get('/users', function (req, res) {
    getAllUsers()
        .then(users => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(users);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

// Define routes
app.get('/users/:id', function (req, res) {
    const userId = req.params.id;
    getUserById(userId)
        .then(users => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(users);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

// Define routes
app.get('/users/add/:nome/:email/:idade', function (req, res) {

    const userNome = req.params.nome;
    const userEmail = req.params.email;
    const userAge = req.params.idade;
    
    // Now you can use userId, userName, userEmail, and userAge in your code
    const user = {
        nome: userNome,
      email: userEmail,
      idade: userAge
    };
    addUser(user)
        .then(users => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(users);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

// Define routes
app.get('/users/update/:id/:nome/:email/:idade', function (req, res) {
    const userId = req.params.id;
    const userNome = req.params.nome;
    const userEmail = req.params.email;
    const userAge = req.params.idade;
    
    // Now you can use userId, userName, userEmail, and userAge in your code
    const user = {
      nome: userNome,
      email: userEmail,
      idade: userAge
    };
    updateUser(user,userId)
        .then(users => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(users);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

    // Define routes
app.get('/users/delete/:id', function (req, res) {
    const userId = req.params.id;
    deleteUser(userId)
        .then(users => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(users);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});
