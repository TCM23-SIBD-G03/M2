# C3 : SQL

## DDL

_(Apresentar o SQL para criação do esquema definido acima num SGBD MySQL.)_


```sql
USE `Supermecadl`;

DROP TABLE IF EXISTS `Tabela_Produto`;
DROP TABLE IF EXISTS `Tabela_Fornecedor`;
DROP TABLE IF EXISTS `Tabela_Cliente`;
DROP TABLE IF EXISTS `Tabela_Compra`;
DROP TABLE IF EXISTS `Tabela_Pedido`;
DROP TABLE IF EXISTS `Tabela_Supermecado`;
DROP TABLE IF EXISTS `Tabela_Empregado`;
DROP TABLE IF EXISTS `Tabela_PedidosRealizados`;
DROP TABLE IF EXISTS `Tabela_ListaDeProdutosPedidos`;

CREATE TABLE IF NOT EXISTS `Tabela_Produto (
  `codProduto` int(13) unsigned NOT NULL,
  `nome` varchar(50) unsigned NOT NULL,
  `preco` float() unsigned NOT NULL,
  CHECK(codProduto>= 1000000000000 AND codProduto<= 9999999999999)
  PRIMARY KEY (`codProduto`)
);

CREATE TABLE IF NOT EXISTS `Tabela_Fornecedor` (
  `nifFornecedor` int(9) unsigned NOT NULL,
  `nome` VARCHAR(50) unsigned NOT NULL,
  `email` 	VARCHAR(100) unsigned NOT NULL,
  `telefone` 	INT(12) unsigned NOT NULL,
   `iban` 	VARCHAR(34) unsigned NOT NULL,
  PRIMARY KEY (`nome`)
);
```
CREATE TABLE IF NOT EXISTS `Tabela_Cliente` (
  `nifCliente` int(9) unsigned NOT NULL,
  `nome` VARCHAR(50) unsigned NOT NULL,
    `telemovel` 	INT(12) unsigned NOT NULL,
  `email` 	VARCHAR(100) unsigned NOT NULL,
   `morada` 	VARCHAR(50) unsigned NOT NULL,
  PRIMARY KEY (`nifCliente`)
);
```
CREATE TABLE IF NOT EXISTS `Tabela_Compra` (
  `numeroCompra` int(9) unsigned NOT NULL,
  `dataCompra` 	DATE unsigned NOT NULL,
    `nifCliente` 	Int(9) unsigned NOT NULL,
  PRIMARY KEY (`nifCliente`)
);

CREATE TABLE IF NOT EXISTS `Tabela_Pedido` (
  `numeroPedido` int(9) unsigned NOT NULL,
  `dataPedido` 	DATE unsigned NOT NULL,
  `nome` 	VARCHAR(50) unsigned NOT NULL,
 
  PRIMARY KEY (`numeroPedido`)
      FOREIGN KEY (empregadoID) REFERENCES Empregado(empregadoID),
);
CREATE TABLE IF NOT EXISTS `Tabela_Supermecado` (
  `supermecadoID` Int(10) unsigned NOT NULL,
  `morada` 	VARCHAR(50) unsigned NOT NULL,
  `gerenteID` 		int(10) unsigned NOT NULL,
  PRIMARY KEY (`supermecadoID`)
      FOREIGN KEY (empregadoID) REFERENCES Empregado(empregadoID),
   
);
CREATE TABLE IF NOT EXISTS `Tabela_Empregado` (
  `empregadoID` Int(10) unsigned NOT NULL,
  `sexo` 	CHAR(1) sexoValido CHECK(gender IN ('F','M')) unsigned NOT NULL,
  `morada` 		VARCHAR(50) unsigned NOT NULL,
  `supermecado` 		Int(10) unsigned NOT NULL,
`salario` 		FLOAT() unsigned NOT NULL,
`cargo` 		VARCHAR(10) unsigned NOT NULL,
`horasServiso` 			Int(10) unsigned NOT NULL,
  PRIMARY KEY (`empregadoID`)
    FOREIGN KEY (supermecadoID) REFERENCES Supermecado(supermecadoID),
     FOREIGN KEY (numeroPedido) REFERENCES Pedido(numeroPedido),
);

CREATE TABLE IF NOT EXISTS `Tabela_PedidosRealizados` (
   `numeroPedido` int(9) unsigned NOT NULL,
   `supermecadoID` Int(10) unsigned NOT NULL,
 `dataPedido` 	DATE unsigned NOT NULL,
  PRIMARY KEY (`numeroPedido``supermecadoID`)
);
CREATE TABLE IF NOT EXISTS `Tabela_ListaDeProdutosPedidos` (
   `numeroPedido` int(9) unsigned NOT NULL,
 `dataPedido` 	DATE unsigned NOT NULL,
  `codProduto` int(13) unsigned NOT NULL,
  `nome` varchar(50) unsigned NOT NULL,
  `preco` float() unsigned NOT NULL,
  `quantidade` Int(4) unsigned NOT NULL,
  PRIMARY KEY (`numeroPedido``codProduto`)
  FOREIGN KEY (supermecadoID) REFERENCES Supermecado(supermecadoID),
  FOREIGN KEY (codProduto) REFERENCES Produto(codProduto),
);

## DML



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
