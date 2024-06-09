# C3 : Normalização

## Relações
Produto(**codProduto**,nomeProduto)

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

### Dependências funcionais

**codProduto** → nomeProduto

**idFornecedor** →nifFornecedor,nome,email,telefone,iban

**idCliente**  →nifCliente,telemovel,nome,email,morada
**numeroCompra** → dataCompra,#idcliente → Cliente

**numeroPedido** → dataPedido

**supermecadoID**→morada

**empregadoID**→nome,sexo,dataNascimento,morada,telemovel,salario,cargo,horasServico

**#idFornecedor**,**#codProduto** → precoFornecedor

**#numeroCompra**,**#codProduto**→quantidade(produto Comprado)

**#numeroPedido**,**#codProduto**→quantidade(produtos pedidos)

**#supermecadoID**,**#codProduto**→quantidade(produto em stock)
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
