# C3 : Normalização

## Relações
Produto(*codProduto*,nomeProduto)

Fornecedor(*idFornecedor*,nifFornecedor,nome,email,telefone,iban)

Cliente(*idCliente*,nifCliente,telemovel,nome,email,morada)

Compra(*numeroCompra*,dataCompra,#idcliente → Cliente,#supermecadoID → Supermecado)

Pedido(*numeroPedido*,dataPedido,#idFornecedor → Fornecedor,#supermecadoID → Supermecado)

Supermecado(*supermecadoID*,morada,#empregadoID → Empregado)

Empregado(*supermecadoID*,nome,sexo,dataNascimento,morada,telemovel,salario,cargo,horasServico,#supermecadoID → Supermecado)

FornecedoreDoProduto(#idFornecedor → Fornecedor*,#codProduto → Produto*,precoFornecedor)

ListaDacompra(#numeroCompra →Compra*,#codProduto → Produto*,quantidade)

ListaProdutosPedidos(#numeroPedido → Pedido *,#codProduto → Produto*,quantidade)

Stock(#supermecadoID → Supermecado*,#codProduto → Produto*,quantidade)

## Normalização do Esquema Relacional

### Dependências funcionais

*codProduto* → nomeProduto

*idFornecedor* → nifFornecedor,nome,email,telefone,iban

*idCliente*  → nifCliente,telemovel,nome,email,morada

*numeroCompra* → dataCompra,#idcliente → Cliente

*numeroPedido* → dataPedido

*supermecadoID* → morada

*empregadoID* → nome,sexo,dataNascimento,morada,telemovel,salario,cargo,horasServico

*#idFornecedor,#codProduto* → precoFornecedor

*#numeroCompra,#codProduto* → quantidade(produto Comprado)

*#numeroPedido,#codProduto* → quantidade(produtos pedidos)

*#supermecadoID,#codProduto* → quantidade(produto em stock)
#### Produto
| codProduto   |nomeProduto                |
| :------- | :------------------------ |
| 1234567890123   | 'Nestle Water   |
| 2345678901234  |Dove Soap         | 

#### Fornecedor

| idFornecedor    | nome                  |email      |telefone  | Nulo |
| :------- | :------------------------ | :---------- | :----------  | :--- |
|12 | Nestle | nestle@example.com|    123456789 |  AB12345678901234567890123456789012|
|34 |Unilever|     'unilever@example.com|    234567890   |   DE23456789012345678901234567890123|

####Cliente

| idCliente    | nifCliente               | telemovel      |nome  |morada |
| :------- | :------------------------ | :---------- | :----------  | :--- |
||01|23456789|  912345678|  JohnDoe|       john.doe@example.com|      123Elm|
|02| 23456780|  923456789|  JaneSmith|     jane.smith@example.com |   456Oak|

####Compra
| numeroCompra  | dataCompra             | #idcliente    |#supermecadoID|
| :------- | :------------------------ | :---------- | :----------  
|123456789| 2024-01-01|01|03|
|234567890 | 2024-02-15|05|11|

####Pedido

| numeroPedido  | dataPedido            | #idFornecedor   |#supermecadoID|
| :------- | :------------------------ | :---------- | :----------  
 |123456789 |2024-01-15 |33 |03 |
 |234567890  | 2024-02-20 |22 |06 |


###Supermecado

| supermecadoID  | morada           | empregadoID|  
| :------- | :------------------------ | :----------  
| 03| 123Elm| 009| 
| 06| 456Oak| 006| 
| 11| 789Pine| 004| 

###Empregado

| empregadoID |  nome           | sexo |  dataNascimento | morada | telemovel | salario |cargo|horasServico|#supermecadoID|
| :------- | :------------------------ | :----------| :------- | :------------------------ | :----------|  :----------|  :----------|  :----------|  :----------   
|001 |JohnDo|     'M'|	1985-06-15|   123ElmSt|954343215|700|caixa|20|03|
|002 |JaneSmith|    'F'|	1990-04-22|  456OakSt|982164234|1000|gerente|22|10|

###FornecedoreDoProduto
| #idFornecedor  | #codProduto      | precoFornecedor|  
| :------- | :------------------------ | :----------  
|12|1234567890123| 4.5|
|56|8901234567890|3.1|


###ListaDacompra
| #numeroCompra  | *#codProduto     | quantidade|  
| :------- | :------------------------ | :----------  
|123456789|6789012345678|2|7.5|
|234567890|1234567890123|10|3.3|




###ListaProdutosPedidos
| #numeroPedido  | *#codProduto     | quantidade|  
| :------- | :------------------------ | :----------  
|123456789|1234567890123|4|
|234567890 |8901234567890|3|

###Stock
| #supermecadoID | *#codProduto     | quantidade|  
| :------- | :------------------------ | :----------  
|03|6789012345678|9|
|06|1234567890123|6|












[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---:
