-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS bazar;
USE bazar;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
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

-- Tabela de categorias de produtos
CREATE TABLE IF NOT EXISTS categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    description TEXT,
    size VARCHAR(50),
    product_photo VARCHAR(255),
    stock INT DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Tabela de carrinhos de compras
CREATE TABLE IF NOT EXISTS carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabela de itens do carrinho de compras
CREATE TABLE IF NOT EXISTS cart_items (
    cart_item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Tabela de pedidos
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pendente', 'Em Processamento', 'Concluido', 'Cancelado') NOT NULL DEFAULT 'Pendente',
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Tabela de itens do pedido
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Exemplo de inserção de dados nas tabelas

-- Inserção de dados na tabela de usuários
INSERT INTO users (full_name, birth_date, email, address, city, state, phone_home, phone_mobile, password) 
VALUES 
('João Silva', '1990-05-15', 'joao@example.com', 'Rua das Flores, 123', 'São Paulo', 'SP', '1122334455', '554499887766', 'hashed_password'),
('Maria Santos', '1985-09-20', 'maria@example.com', 'Avenida Central, 456', 'Rio de Janeiro', 'RJ', '1122334455', '554499887766', 'hashed_password');

-- Inserção de dados na tabela de categorias
INSERT INTO categories (category_name) 
VALUES 
('Roupas'),
('Calçados'),
('Roupas Evangélicas');

-- Inserção de dados na tabela de produtos
INSERT INTO products (product_name, category_id, description, size, product_photo, stock, price) 
VALUES 
-- Inserção de dados na tabela de produtos (continuação)
('Camisa Polo', 1, 'Camisa Polo de algodão', 'M', 'https://cdn.sistemawbuy.com.br/arquivos/8396f6cdc4ecfdde50f447ad12127860/produtos/642f0f023151b/fundo-cinza-642f0f02e3166.jpg', 100, 49.99),
('Tênis Esportivo', 2, 'Tênis para corrida', '42', 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376591/07/sv01/fnd/BRA/w/1000/h/1000/fmt/png', 50, 149.99),
('Vestido Longo Floral', 3, 'Vestido longo floral com detalhes elegantes', 'M', 'https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/dress001.jpg?alt=media&token=6724aa22-ae8e-49f6-b6b0-111049fb7971', 80, 89.99),
('Saia Midi Plissada', 3, 'Saia midi plissada com detalhes em renda', 'P', 'https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/dress002.jpg?alt=media&token=4c41fa70-b082-4e53-b78a-4478ca0feeb2', 60, 69.99),
('Blusa Social Branca', 3, 'Blusa social branca com detalhes delicados', 'G', 'https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/dress003.jpg?alt=media&token=c0c1699d-9122-4e4f-b04e-4f6dc403deb8', 40, 39.99),
('Calça Social Preta', 3, 'Calça social preta elegante e confortável', '42', 'https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/dress004.jpg?alt=media&token=916223b5-8f6a-4bf6-b574-b46ae27127b4', 30, 79.99),
('Vestido Midi Estampado', 3, 'Vestido midi estampado com corte evasê', 'M', 'https://firebasestorage.googleapis.com/v0/b/bazar-cattleya.appspot.com/o/dress005.jpg?alt=media&token=356e5625-7818-40a7-a75d-251f7ea878e3', 50, 99.99);

-- Inserindo dados na tabela de carrinhos de compras
INSERT INTO carts (user_id) 
VALUES 
(1),
(2),
(1); -- Corrigido para um user_id existente na tabela users

-- Inserindo dados na tabela de itens do carrinho de compras
INSERT INTO cart_items (cart_id, product_id, quantity) 
VALUES 
(1, 1, 2),
(2, 2, 1),
(1, 1, 2),
(1, 3, 1);

-- Inserindo dados na tabela de pedidos
INSERT INTO orders (user_id, order_date, status, total) 
VALUES 
(1, '2024-05-25 12:30:00', 'Pendente', 85.99),
(1, '2024-05-25 12:30:00', 'Pendente', 85.99),
(2, '2024-05-25 13:45:00', 'cancelado', 120.50),
(1, '2024-05-25 10:30:00', 'Em Processamento', 250.99),
(2, '2024-05-25 20:45:00', 'cancelado', 500.50);

-- Inserindo dados na tabela de itens do pedido
INSERT INTO order_items (order_id, product_id, quantity, price) 
VALUES 
(1, 1, 2, 39.99),
(2, 2, 1, 45.00),
(3, 3, 1, 60.00); -- Corrigido para um order_id existente na tabela orders



-- Trigger para atualizar o estoque ao adicionar um item ao carrinho
DELIMITER //

CREATE TRIGGER update_product_stock
AFTER INSERT ON cart_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock = stock - NEW.quantity
    WHERE product_id = NEW.product_id;
END;
//

DELIMITER ;

-- Procedimento para finalizar uma compra e criar um pedido
DELIMITER //

CREATE PROCEDURE finalize_purchase(IN user_id INT)
BEGIN
    DECLARE cart_id INT;
    DECLARE total_amount DECIMAL(10, 2);
    
    -- Obter o carrinho do usuário
    SELECT c.cart_id INTO cart_id
    FROM carts c
    WHERE c.user_id = user_id;
    
    -- Calcular o total da compra
    SELECT SUM(p.price * ci.quantity) INTO total_amount
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.product_id
    WHERE ci.cart_id = cart_id;
    
    -- Criar o pedido
    INSERT INTO orders (user_id, total)
    VALUES (user_id, total_amount);
    SET @last_order_id = LAST_INSERT_ID();
    
    -- Mover itens do carrinho para o pedido
    INSERT INTO order_items (order_id, product_id, quantity, price)
    SELECT @last_order_id, ci.product_id, ci.quantity, p.price
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.product_id
    WHERE ci.cart_id = cart_id;
    
    -- Limpar o carrinho
    DELETE FROM cart_items WHERE cart_id = cart_id;
END;
//

DELIMITER ;
