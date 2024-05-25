// npm install mysql2

// database.js - classe

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

// db_operations.js - operações no banco de dados

function getAllUsers() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE user_id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

function updateUser(user, id) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE users SET ? WHERE user_id = ?', [user, id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM users WHERE user_id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

function getAllCarrinho(user_id) {
  return new Promise((resolve, reject) => {
    connection.query(`
      SELECT p.product_name, ci.quantity
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.product_id
      WHERE ci.cart_id = (SELECT cart_id FROM carts WHERE user_id = ?)
    `, [user_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Funções para gerenciar produtos e carrinhos

function getAllProducts() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM products', (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function getProductById(id) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM products WHERE product_id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}

function addProduct(product) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO products SET ?', product, (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

function updateProduct(product, id) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE products SET ? WHERE product_id = ?', [product, id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM products WHERE product_id = ?', [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getAllCarrinho,
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};
