# C3 : SQL

## DDL




USE `Supermecado`;

DROP TABLE IF EXISTS `Tabela_Supermecado`;
DROP TABLE IF EXISTS `Tabela_Empregado`;
DROP TABLE IF EXISTS `Tabela_Produto`;
DROP TABLE IF EXISTS `Tabela_Fornecedor`;
DROP TABLE IF EXISTS `Tabela_Cliente`;
DROP TABLE IF EXISTS `Tabela_Pedido`;
DROP TABLE IF EXISTS `Tabela_FornecedordoProduto`;
DROP TABLE IF EXISTS `Tabela_ListaProdutosPedido`;
DROP TABLE IF EXISTS `Tabela_ListaDaCompra`;
DROP TABLE IF EXISTS `Tabela_Stock`;


CREATE TABLE IF NOT EXISTS `Tabela_Supermecado` (
  `SupermecadoID` int(2) unsigned NOT NULL  UNIQUE,
  `morada` varchar(50)  NOT NULL  ,
    `empregadoID` int(9) NOT NULL ,
  PRIMARY KEY (`supermecadoID`),
 FOREIGN KEY (Tabela_Empregado) REFERENCES Tabela_Empregado(empregadoID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
 
CREATE TABLE IF NOT EXISTS `Tabela_Empregado` (
  `empregadoID` int(2) unsigned NOT NULL UNIQUE,
   `nome` varchar(50) NOT NULL,
  `sexo` CHAR(1) ,
  `dataNascimento` datetime NOT NULL,
  `morada` varchar(50) NOT NULL,
 `telemovel` int(9) NOT NULL,
 `salario` int(4)  unsigned NOT NULL,
   `cargo` varchar(10) NOT NULL,
	`horasServico` int (3) NOT NULL,
	`supermecadoID` int (2) NOT NULL,
 CHECK (sexo IN ('F', 'M')),
  PRIMARY KEY (`empregadoID`),
  FOREIGN KEY (Tabela_Supermecado) REFERENCES Tabela_Supermecado(supermecadoID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
 
CREATE TABLE IF NOT EXISTS `Tabela_Produto` (
  `codProduto` int(13) unsigned NOT NULL UNIQUE,
  `nomeProduto` varchar(50)  NOT NULL UNIQUE,
  PRIMARY KEY (`codProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `Tabela_Fornecedor` (
  `idFornecedor` int(2) unsigned NOT NULL UNIQUE,
  `nifFornecedor` int(9) unsigned  NOT NULL UNIQUE,
  `nome` varchar(50) NOT NULL UNIQUE,
  `email` varchar(50)  NOT NULL UNIQUE,
  `	telefone` int(12) unsigned  NOT NULL UNIQUE,
	`iban` varchar(34)  NOT NULL,
  PRIMARY KEY (`idFornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
  ```
  ```
CREATE TABLE IF NOT EXISTS `Tabela_Cliente` (
  `idCliente` int(9) unsigned NOT NULL UNIQUE,
  `nifCliente` int(9) unsigned  NOT NULL UNIQUE,
  `telemovel` int(9) UNIQUE,
  `email` varchar(50)  ,
	`morada` varchar(50)  NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

CREATE TABLE IF NOT EXISTS `Tabela_Pedido` (
  `numeroPedido` int(9) unsigned NOT NULL UNIQUE,
  `dataPedido` datetime  NOT NULL ,
   `idFornecedor`int(9) unsigned NOT NULL,
   `supermecadoID`int(2) unsigned NOT NULL,
  PRIMARY KEY (`numeroPedido`),
   FOREIGN KEY (Tabela_Fornecedor) REFERENCES Tabela_Fornecedor(idFornecedor),
  FOREIGN KEY (Tabela_Supermecado) REFERENCES Tabela_Supermecado(supermecadoID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
  ```  
  ```

CREATE TABLE IF NOT EXISTS `Tabela_Compra` (
  `numeroCompra` int(9) unsigned NOT NULL UNIQUE,
  `dataCompra` datetime  NOT NULL ,
  `idCliente`int(9) unsigned NOT NULL,
   `supermecadoID`int(2) unsigned NOT NULL,
  PRIMARY KEY (`idCliente`),
  FOREIGN KEY (Tabela_Cliente) REFERENCES Tabela_Cliente(idCliente),
  FOREIGN KEY (Tabela_Supermecado) REFERENCES Tabela_Supermecado(supermecadoID)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

    ```
    ```

CREATE TABLE IF NOT EXISTS `Tabela_FornecedordoProduto` (
   `idFornecedor` int(2) unsigned NOT NULL ,
   `codProduto` int(13) unsigned NOT NULL ,
    `precoFornecedor` decimal(2) unsigned NOT NULL ,
  FOREIGN KEY (Tabela_Fornecedor) REFERENCES Tabela_Fornecedor(idFornecedor),
   FOREIGN KEY (Tabela_Produto) REFERENCES Tabela_Produto(codProduto),
 PRIMARY KEY ( `idFornecedor`,`codProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
    ```
  ```
CREATE TABLE IF NOT EXISTS `Tabela_ListaDaCompra` (
   `numeroCompra` int(9) unsigned NOT NULL ,
   `codProduto` int(13) unsigned NOT NULL ,
    `quantidade` int(3) unsigned NOT NULL ,
     `precoProdutos` decimal(2) unsigned NOT NULL ,
    FOREIGN KEY (Tabela_Produto) REFERENCES Tabela_Produto(codProduto),
      FOREIGN KEY (Tabela_Compra) REFERENCES Tabela_Compra(numeroCompra),
  PRIMARY KEY (  `numeroCompra`,`codProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
  ```
  ```
CREATE TABLE IF NOT EXISTS `Tabela_ListaProdutosPedido` (
   `numeroPedido` int(9) unsigned NOT NULL ,
   `codProduto` int(13) unsigned NOT NULL ,
    `quantidade` int(3) unsigned NOT NULL ,
 FOREIGN KEY (Tabela_Produto) REFERENCES Tabela_Produto(codProduto),
 FOREIGN KEY (Tabela_Pedido) REFERENCES Tabela_Pedido(numeroPedido),
 PRIMARY KEY (  `numeroPedido`,`codProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
  ```
  ```
CREATE TABLE IF NOT EXISTS `Tabela_Stock` (
   `supermecadoID` int(2) unsigned NOT NULL ,
   `codProduto` int(13) unsigned NOT NULL ,
    `quantidade` int(3) unsigned NOT NULL ,
 FOREIGN KEY (Tabela_Produto) REFERENCES Tabela_Produto(codProduto),
 FOREIGN KEY (Tabela_Supermecado) REFERENCES Tabela_Supermecado(supermecadoID),
 PRIMARY KEY (  `numeroPedido`,`codProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
  ```
  ```
INSERT INTO `Tabela_Supermecado` (`supermecadoID`, `morada`,`empregadoID`) VALUES
(03,'123Elm',009),
(06,'456Oak',006),
(11,'789Pine',004),
(02,'101Maple',010),
(07,'202Birch',012),
(05,'303Cedar',006),
(10,'05Chestnu',016);
  ```
  ```
INSERT INTO `Tabela_Empregado` (`empregadoID`,`nome`, `sexo`,`dataNascimento`,`morada`,`telemovel`,`salario`,`cargo`,`horas`,`supermecadoID`) VALUES
(001 ,'JohnDoe'  ,     'M'	,1985-06-15 ,   '123ElmSt',954343215,700,'caixa' ,20,03),
(002 ,'JaneSmith' ,    'F'	,1990-04-22  ,  '456OakSt',982164234,1000,'gerente',  22,10),
(003 ,'AlanBrown'  ,   'M'	,1987-08-10   , '789PineSt',90123458,700,'caixa',    18,11),
(005 ,'EmilyDavis'  ,  'F'	,1992-12-05    ,'101MapleSt',9421923,750,'repositor',  21,10),
(007, 'MichaelWilson', 'M'	,1983-03-11    ,'202BirchSt',911527222,700,'caixa', 19,07),
(006,'SarahJohnson'  ,'F'	,1995-09-08    ,'303CedarSt',984225111,1000,'gerente',	20,05),
(004 ,'DavidLee'     , 'M'	,1988-11-20    ,'404WalnutSt',901135222,1000,'gerente',	23,11),
(008, 'LauraClark'   , 'F',	1993-07-17    ,'505ChestnutSt',966842132,750,'repositor', 20,03);
(009,'RobertWhite','M  ' ,1986-02-14    ,'606Elm ' ,952674124,  'gerente',19,02),
(010,'LindaGreen', 'F ' ,1991-05-23    ,'707Oak ',923653675,'gerente',22,02),
(011,'StevenBlack',' M'  ,1984-10-12   ,' 808Pine',937145982,'repositor',17,05),
(012,'SusanMiller', 'F  ',1989-03-29   , '909Maple' ,921521352,'gerente', 21,07),
(013,'KevinWilson',  'M' ,1992-07-19   , '1010Birch' ,926832152,'repositor',  18,11),
(014,'RachelAdams',  'F' ,1994-11-25   , '1111Cedar' ,976313043,'caixa', 20,02),
(015,'BrianLewis',   'M' ,1988-06-13   , '1212Walnut' , 902342142, 'caixa',22,10),
(016,'MeganTurner',  'F', 1996-08-30   , '1313Chestnu' ,915824123, 'gerente',21,10);
  ```
  ```
INSERT INTO `Tabela_Produto` (`codProduto`, `nomeProduto`) VALUES
(1234567890123,  'Nestle Water'),
(2345678901234,'Dove Soap'),
(3456789012345 , 'Colgate Toothpaste'),
(4567890123456 , 'Lay Chips'),
(5678901234567 , 'Heinz Ketchup'),
(6789012345678 , 'Kellogg Cereal'),
(7890123456789  ,'Gillette Razor'),
(8901234567890  ,'Pampers Diapers');
  ```
  ```
INSERT INTO `Tabela_Fornecedor` (`idFornecedor`, `nome`,`email`,`telefone`,`iban`) VALUES
(12 ,  'Nestle'   ,' nestle@example.com',      123456789    ,'AB12345678901234567890123456789012'),
(34 ,  'Unilever',     'unilever@example.com',    234567890      ,'DE23456789012345678901234567890123'),
(56 ,'ProcterG' ,    'procterg@example.com',    345678901  ,'GH34567890123456789012345678901234'),
(78 ,'PepsiCo '  ,   'pepsico@example.com',    456789012      ,'JK45678901234567890123456789012345'),
(90 , 'CocaCola'   ,  'cocacola@example.com' ,      567890123   ,'MN56789012345678901234567890123456'),
(11 ,'Kellogg'   , 'kelloggs@example.com' , 678901234     ,'PQ67890123456789012345678901234567'),
(22, 'Kraft'       ,'kraft@example.com' , 789012345  ,'ST78901234567890123456789012345678'),
(33, 'Johnson'     , 'johnson@example.com' ,  890123456    ,'VW89012345678901234567890123456789');
  ```
  ```
INSERT INTO `Tabela_Cliente` (`idCliente`, `nifCliente`,`telemovel`,`nome`,`email`,`morada`) VALUES
(01, 23456789,  912345678,  'JohnDoe',       'john.doe@example.com',      '123Elm'),
(02, 23456780,  923456789,  'JaneSmith',     'jane.smith@example.com',    '456Oak'), 
(03, 23456781,  934567890,  'AlanBrown',     'alan.brown@example.com',    '789Pine'), 
(04, 23456782,  945678901,  'EmilyDavis',    'emily.davis@example.com',   '101Maple'), 
(05, 23456783,  956789012,  'MichaelWilson', 'michael.wilson@example.com', '202Birch'), 
(06, 23456784,  967890123,  'SarahJohnson',  'sarah.johnson@example.com', '303Cedar' ),
(07, 23456785,  978901234,  'DavidLee',      'david.lee@example.com',     '404Walnut' ),
(08, 23456786,  989012345,  'LauraClark',    'laura.clark@example.com',   '505Chestnut');
  ```
  ```
INSERT INTO `Tabela_Pedido` (`numeroPedido`, `dataPedido`,`idFornecedor`,`supermecadoID`) VALUES
(123456789 , 2024-01-15,33,03),
(234567890 , 2024-02-20,22,06),
(345678901 , 2024-03-25,33,11),
(456789012 , 2024-04-30,78,02),
(567890123 , 2024-05-15,56,07),
(678901234 , 2024-06-20,12,05),
(789012345 , 2024-07-25,90,08),
(890123456 , 2024-08-30,56,10);
  ```
  ```
INSERT INTO `Tabela_Compra` (`numeroCompra`, `dataCompra`,`idCliente`,`supermecadoID`) VALUES
(123456789,  2024-01-01,01,03),
(234567890 , 2024-02-15,05,11),
(345678901  ,2024-03-10,08,02),
(456789012  ,2024-04-25,03,10),
(567890123  ,2024-05-05,02,06),
(678901234  ,2024-06-20,01,07),
(789012345  ,2024-07-30,04,02),
(890123456  ,2024-08-12,04,11);
  ```
  ```
INSERT INTO `Tabela_FornecedordoProduto`(`idFornecedor`,`codProduto`, `precoFornecedor` ) VALUES
(12,1234567890123, 4.5),
(56,8901234567890,3.1),
(78,7890123456789,5.6),
(56,5678901234567,8.6),
(22,6789012345678,4.2),
(33,1234567890123,6.4),
(34,4567890123456,1.0),
(90,6789012345678 ,7.8);
  ```
  ```
INSERT INTO `Tabela_ListaProdutosPedido` (`numeroPedido` , `codProduto` ,`quantidade`) VALUES
(123456789,1234567890123, 4),
(234567890 ,8901234567890,3),
(890123456,7890123456789,5),
(345678901,5678901234567,8),
(789012345,6789012345678,4),
(234567890 ,1234567890123,6),
(345678901,4567890123456,1),
(890123456,6789012345678 ,7);
  ```
  ```
INSERT INTO `Tabela_ListaDaCompra` (`numeroCompra`, `codProduto`, `quantidade`, `precoProdutos`)VALUES
(123456789,  6789012345678,2,7.5),
(234567890 , 1234567890123,10,3.3),
(345678901  ,4567890123456,4,3.2),
(456789012  ,8901234567890,7,1.1),
(567890123  ,6789012345678,9,2.9),
(123456789  ,8901234567890,11,2.7),
(789012345  ,1234567890123,6,3.5),
(456789012   ,7890123456789,9,7.8);
  ```
  ```
INSERT INTO `Tabela_Stock` (`supermecadoID`,`codProduto`,`quantidade`) VALUES
(03,6789012345678,9),
(06,1234567890123,6),
(11,1234567890123,4),
(02,4567890123456,10),
(03,6789012345678,12),
(05,4567890123456,6),
(10,1234567890123,16),
(11,8901234567890,4),
(02,8901234567890,10),
(03,1234567890123,12);
  ```


 












## DML



---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
