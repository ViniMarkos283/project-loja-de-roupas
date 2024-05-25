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





-- Inserindo dados na tabela de usuários (users)
INSERT INTO users (full_name, birth_date, email, address, city, state, phone_home, phone_mobile, password) 
VALUES 
('João Silva', '1990-05-15', 'joao@example.com', 'Rua das Flores, 123', 'São Paulo', 'SP', '1122334455', '554499887766', 'hashed_password'),
('Maria Santos', '1985-09-20', 'maria@example.com', 'Avenida Central, 456', 'Rio de Janeiro', 'RJ', '1122334455', '554499887766', 'hashed_password');





-- Inserindo dados na tabela de produtos (products)
INSERT INTO products (product_name, category, description, size, product_photo) 
VALUES 
('Camisa Polo', 'Roupas', 'Camisa Polo de algodão', 'M', 'https://cdn.sistemawbuy.com.br/arquivos/8396f6cdc4ecfdde50f447ad12127860/produtos/642f0f023151b/fundo-cinza-642f0f02e3166.jpg'),
('Tênis Esportivo', 'Calçados', 'Tênis para corrida', '42', 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376591/07/sv01/fnd/BRA/w/1000/h/1000/fmt/png');





-- Inserindo dados na tabela de categorias (categories)
INSERT INTO categories (category_name) 
VALUES 
('Roupas'),
('Calçados');





-- Inserindo dados na tabela de carrinhos (carts)
INSERT INTO carts (user_id) 
VALUES 
(1),
(2);





-- Inserindo dados na tabela de itens do carrinho (cart_items)
INSERT INTO cart_items (cart_id, product_id, quantity) 
VALUES 
(1, 1, 2),
(2, 2, 1);





-- Inserindo dados na tabela de pedidos (orders)
INSERT INTO orders (user_id, order_date, status, total) 
VALUES 
(1, '2024-05-25 12:30:00', 'Pendente', 85.99),
(2, '2024-05-25 13:45:00', 'Entregue', 120.50);





-- Inserindo dados na tabela de itens do pedido (order_items)
INSERT INTO order_items (order_id, product_id, quantity, price) 
VALUES 
(1, 1, 2, 39.99),
(1, 2, 1, 45.00),
(2, 2, 1, 120.50);






-- Selecionar produtos por categoria
SELECT * FROM products WHERE category = 'Vestidos';





-- Visualizar carrinho de um usuário
SELECT p.product_name, ci.quantity
FROM cart_items ci
JOIN products p ON ci.product_id = p.product_id
WHERE ci.cart_id = (SELECT cart_id FROM carts WHERE user_id = 1);

SELECT p.product_name, ci.quantity, p.product_photo, (p.price * ci.quantity) AS total_price
FROM cart_items ci
JOIN products p ON ci.product_id = p.product_id
JOIN carts c ON ci.cart_id = c.cart_id
WHERE c.user_id = 1;


SELECT p.product_name, oi.quantity, p.product_photo, (oi.price * oi.quantity) AS total_price
FROM order_items oi 
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id
JOIN users u ON o.user_id = u.user_id
WHERE u.user_id = 1;








-- Visualizar pedidos de um usuário
SELECT o.order_id, o.order_date, o.status, oi.product_id, oi.quantity, oi.price
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.user_id = 1;
