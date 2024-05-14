// npm install mysql

//database.js - classe

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fatec217',
  database: 'Bazar',
  port: 3300
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados');
});

module.exports = connection;

// const connection = require('./database');

function getAllUsuario() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Usuarios', (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results); // Resolve a promessa com os resultados
      }
    });
  });
}

// function getUniqueUsuario(email, senha) {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT email,senha FROM Usuarios WHERE email = "?" AND senha = "?"',[email],[senha],(error, results, fields) => {
//       if (error) {
//         console.log(error);
//         reject(error); // Rejeita a promessa com o erro
//       } else {
//         console.log("passou con");
//         resolve(results); // Resolve a promessa com os resultados
//       }
//     });
//   });
// }

function getUniqueUsuario(email, senha) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT email, senha FROM Usuarios WHERE email = ? AND senha = ?', [email, senha], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results); // Resolve a promessa com os resultados
      }
    });
  });
}


function getUsuarioById(id) {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Usuarios WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results); // Resolve a promessa com os resultados
      }
    });
  });
}

function addUsuario(Usuario) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO Usuario SET ?', [Usuario], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results.affectedRows); // Resolve a promessa com os resultados
      }
    });
  });
}

function updateUsuario(Usuario,id) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE Usuario SET ? WHERE id = ?', [Usuario, id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results.affectedRows); // Resolve a promessa com os resultados
      }
    });
  });
}

function deleteUsuario(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM Usuarios WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results.affectedRows); // Resolve a promessa com os resultados
      }
    });
  });
}

module.exports = {
  getAllUsuario,
  getUniqueUsuario,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario
};