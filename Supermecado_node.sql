
USE `db_supermecados`;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `nifCliente` int NOT NULL,
  `morada` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `numTelemovel` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `empregado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) DEFAULT NULL,
  `sexo` varchar(512) NOT NULL,
  `dataNascimento` varchar(512) NOT NULL,
  `morada` varchar(512) NOT NULL,
  `telemovel` int DEFAULT NULL,
  `cargo` varchar(512) NOT NULL,
  `salario` int NOT NULL,
  `supermecadoId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `fornecedor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomeFornecedor` varchar(512) NOT NULL,
  `nifFornecedor` varchar(512) NOT NULL,
  `iban` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dataPedido` varchar(512) NOT NULL,
  `fornecedorId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codProduto` int NOT NULL,
  `nomeProduto` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `supermecado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `morada` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `compra` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dataCompra` varchar(512) NOT NULL,
  `supermecadoId` int DEFAULT NULL,
  `clienteId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
