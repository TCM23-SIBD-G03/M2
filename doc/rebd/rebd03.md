# C3 : Normalização

## Relações
Produto(_**codProduto**-,nomeProduto)
Fornecedor(**idFornecedor**,nifFornecedor,nome,email,telefone,iban)
Cliente(**idCliente**,nifCliente,telemovel,nome,email,morada)
Compra(**numeroCompra**,dataCompra,#idcliente → Cliente,#supermecadoID → Supermecado)
Pedido(**numeroPedido**,dataPedido,#idFornecedor → Fornecedor,#supermecadoID → Supermecado)
Supermecado(**supermecadoID**,morada,#empregadoID → Empregado)
Empregado(**supermecadoID**,nome,sexo,dataNascimento,morada,telemovel,salario,cargo,horasServico,#supermecadoID → Supermecado)
FornecedoreDoProduto(**#idFornecedor → Fornecedor**,**#codProduto → Produto**,precoFornecedor)
ListaDacompra(**#numeroCompra →Compra**,**#codProduto → Produto**,quantidade)
ListaProdutosPedidos(**#numeroPedido → Pedido **,**#codProduto → Produto**,quantidade)
Stock(**#supermecadoID → Supermecado**,**#codProduto → Produto**,quantidade)

## Normalização do Esquema Relacional
_(Apresentar o estudo da normalização das relações obtidas na secção anterior. Desnormalizar se necessário.)_

---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
