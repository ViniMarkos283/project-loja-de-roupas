var express = require('express');

const cors = require('cors');

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
// app.use(cors({
//     origin: true, // ou você pode especificar uma lista de origens permitidas ['http://example.com', 'https://example.com']
//     credentials: true // habilita o suporte a credenciais
// }));
app.use(cors());

const { getAllUsuario,getUniqueUsuario, getUsuarioById, addUsuario, updateUsuario, deleteUsuario } = require('./connection');

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
app.get('/Usuario', function (req, res) {
    getAllUsuario()
        .then(Usuario => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(Usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

// Define routes
app.get('/Usuario/:id', function (req, res) {
    const UsuarioId = req.params.id;
    getUsuarioById(UsuarioId)
        .then(Usuario => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(Usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});


// Define routes
app.get('/usuario/Unique/:email/:senha', function (req, res) {
    const email = req.params.email;
    const senha = req.params.senha;

    // Chama a função para buscar um usuário único por email e senha no banco de dados
    getUniqueUsuario(email, senha)
        .then(usuario => {
            // Se o usuário for encontrado, envie-o como resposta
            res.json(usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao buscar o usuário, envie uma resposta de erro
            console.error('Erro ao buscar usuário:', error);
            res.status(500).send('Erro ao buscar usuário');
        });
});


// app.get('/Usuario/Unique/:email/:senha', function (req, res) {
//     const UsuarioEmail = req.params.email;
//     const UsuarioSenha = req.params.senha;

//     getUniqueUsuario(UsuarioEmail, UsuarioSenha)
//         .then(Usuario => {
//             res.send('Hello, HTTPS!');
//             console.log("passou cons");
//             // Se os usuários forem recuperados com sucesso, envie-os como resposta
//             res.json(Usuario);
//         })
//         .catch(error => {
//             // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
//             res.status(500).send('Erro ao obter usuários');
//         });
// });

// Define routes
app.get('/Usuario/add/:nome/:email/:idade', function (req, res) {

    const UsuarioNome = req.params.nome;
    const UsuarioEmail = req.params.email;
    const UsuarioAge = req.params.idade;
    
    // Now you can use UsuarioId, UsuarioName, UsuarioEmail, and UsuarioAge in your code
    const Usuario = {
        nome: UsuarioNome,
      email: UsuarioEmail,
      idade: UsuarioAge
    };
    addUsuario(Usuario)
        .then(Usuario => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(Usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

// Define routes
app.get('/Usuario/update/:id/:nome/:email/:idade', function (req, res) {
    const UsuarioId = req.params.id;
    const UsuarioNome = req.params.nome;
    const UsuarioEmail = req.params.email;
    const UsuarioAge = req.params.idade;
    
    // Now you can use UsuarioId, UsuarioName, UsuarioEmail, and UsuarioAge in your code
    const Usuario = {
      nome: UsuarioNome,
      email: UsuarioEmail,
      idade: UsuarioAge
    };
    updateUsuario(Usuario,UsuarioId)
        .then(Usuario => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(Usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});

    // Define routes
app.get('/Usuario/delete/:id', function (req, res) {
    const UsuarioId = req.params.id;
    deleteUsuario(UsuarioId)
        .then(Usuario => {
            // Se os usuários forem recuperados com sucesso, envie-os como resposta
            res.json(Usuario);
        })
        .catch(error => {
            // Se ocorrer um erro ao obter os usuários, envie uma resposta de erro
            res.status(500).send('Erro ao obter usuários');
        });
});
