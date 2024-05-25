CREATE DATABASE bazar;

USE bazar;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    phone_home VARCHAR(20),
    phone_mobile VARCHAR(20),
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    size VARCHAR(50),
    product_photo VARCHAR(255)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE cart_items (
    cart_item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO users (full_name, birth_date, email, address, city, state, phone_home, phone_mobile, password)
VALUES ('Maria da Silva', '1990-05-15', 'maria@example.com', 'Rua das Flores, 123', 'São Paulo', 'SP', '1111-1111', '99999-9999', 'hashed_password');

INSERT INTO categories (category_name)
VALUES ('Vestidos');

INSERT INTO products (product_name, category, description, size, product_photo)
VALUES ('Vestido Floral', 'Vestidos', 'Vestido longo floral', 'M', '/images/vestido_floral.jpg');

INSERT INTO carts (user_id)
VALUES (1);

INSERT INTO cart_items (cart_id, product_id, quantity)
VALUES (1, 1, 2);

SELECT * FROM products WHERE category = 'Vestidos';

SELECT p.product_name, ci.quantity
FROM cart_items ci
JOIN products p ON ci.product_id = p.product_id
WHERE ci.cart_id = (SELECT cart_id FROM carts WHERE user_id = 1);

SELECT o.order_id, o.order_date, o.status, oi.product_id, oi.quantity, oi.price
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.user_id = 1;
