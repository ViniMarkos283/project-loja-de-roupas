// npm install mysql2

// database.js - classe

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bazar'
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

function getUserEmail(email, pass) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, pass], (error, results, fields) => {
      if (error) {
        console.error("Erro na consulta ao banco de dados: ", error);
        reject(error);
      } else {
        resolve(results);
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


function getAllCarrinho(userId) {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT p.product_name, oi.quantity, p.product_photo, p.product_id,oi.order_id,(oi.price * oi.quantity) AS total_price
      FROM order_items oi 
      JOIN products p ON oi.product_id = p.product_id
      JOIN orders o ON oi.order_id = o.order_id
      JOIN users u ON o.user_id = u.user_id
      WHERE u.user_id =  ?      
      `,
      [userId],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}

function deleteProductCarrinho(cartId,idProd) {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      DELETE FROM cart_items 
      WHERE cart_id = ? AND product_id = ?`,
      [cartId,idProd],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
  });
}

function addProductCarrinho(cart_id, product_id, quantity) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)', [cart_id, product_id, quantity], (error, results, fields) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}


module.exports = {
  getAllUsers,
  getUserEmail,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getAllCarrinho,
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteProductCarrinho,
  addProductCarrinho
};
