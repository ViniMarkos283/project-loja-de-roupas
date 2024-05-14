CREATE DATABASE IF NOT EXISTS Bazar;

USE Bazar;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    endereco VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    telefone_fixo VARCHAR(15),
    telefone_celular VARCHAR(15),
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE Carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Vestidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tamanho VARCHAR(10),
    tipo VARCHAR(100),
    imagem VARCHAR(255)
);

CREATE TABLE ItemCarrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrinho_id INT,
    vestido_id INT,
    quantidade INT,
    FOREIGN KEY (carrinho_id) REFERENCES Carrinho(id),
    FOREIGN KEY (vestido_id) REFERENCES Vestidos(id)
);

CREATE TABLE Trocas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    item_carrinho_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (item_carrinho_id) REFERENCES ItemCarrinho(id)
);




INSERT INTO Usuarios (nome_completo, data_nascimento, email, endereco, cidade, estado, telefone_fixo, telefone_celular, senha) 
VALUES 
('Maria Silva', '1990-04-15', 'maria@example.com', 'Rua das Flores, 123', 'São Paulo', 'SP', '1122334455', '9988776655', 'senha123'),
('João Oliveira', '1985-10-20', 'joao@example.com', 'Av. Central, 456', 'Rio de Janeiro', 'RJ', '1122334466', '9988776644', 'senha456'),
('Ana Santos', '1995-07-03', 'ana@example.com', 'Rua Principal, 789', 'Belo Horizonte', 'MG', '1122334477', '9988776633', 'senha789'),
('Pedro Souza', '1980-12-10', 'pedro@example.com', 'Av. das Árvores, 987', 'Porto Alegre', 'RS', '1122334488', '9988776622', 'senha012'),
('Carla Pereira', '1992-05-25', 'carla@example.com', 'Rua dos Passarinhos, 321', 'Recife', 'PE', '1122334499', '9988776611', 'senha345');


INSERT INTO Vestidos (nome, tamanho, tipo, imagem) 
VALUES 
('Saia Preto Linho Botões Frontais Midi Fascinius', 'PP', 'Casual; Social', '../img/banner/dress001.jpg'),
('Vestido Bege Renda Estilo Ciganinha Godê Midi Fascinius', 'P', 'Casual; Social', '../img/banner/dress002.jpg'),
('Vestido Jeans Com Mini Pregas Via Tolentino', '40', 'Casual; Social', '../img/banner/dress003.jpg'),
('Vestido Tweed Com Detalhe De Botões Preto Bethe Tatá Martello', 'G','Casual; Social', '../img/banner/dress004.jpg'),
('Vestido Evasê Estampado Melina Nítido Jeans', '44', 'Casual; Social', '../img/banner/dress005.jpg'),
('Conjunto Verde Midi Louise Tatá Martello',  'GG', 'Casual; Social','../img/banner/dress006.jpg' ),
('Conjunto Roxo Midi Jucy Tatá Martello ',  'PP', 'Casual; Social','../img/banner/dress007.jpg' ),
('Chemise Azul Estampado Melissa Pikuxa',  'G', 'Casual; Social','../img/banner/dress008.jpg' );



INSERT INTO Carrinho (usuario_id) VALUES (1), (2), (3), (4), (5);


INSERT INTO ItemCarrinho (carrinho_id, vestido_id, quantidade) 
VALUES 
(1, 1, 2),
(2, 3, 1),
(3, 2, 3),
(4, 4, 1),
(5, 5, 2);


INSERT INTO Trocas (usuario_id, item_carrinho_id) VALUES (1, 11), (2, 12), (3, 13), (4, 14), (5, 15);



drop table Usuarios;
drop table Carrinho;
drop table Vestidos;
drop table ItemCarrinho;
drop table Trocas;



