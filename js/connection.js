// npm install mysql

//database.js - classe

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'I%3I0Ii6X65BlD06',
  database: 'banco_usuarios'
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

function getAllUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results); // Resolve a promessa com os resultados
      }
    });
  });
}

function getUserById(id) {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results); // Resolve a promessa com os resultados
      }
    });
  });
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', [user], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results.affectedRows); // Resolve a promessa com os resultados
      }
    });
  });
}

function updateUser(user,id) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error); // Rejeita a promessa com o erro
      } else {
        resolve(results.affectedRows); // Resolve a promessa com os resultados
      }
    });
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
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
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};