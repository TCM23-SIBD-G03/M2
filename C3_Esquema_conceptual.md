C3:Esquema conceptual 

Modelo E/A 

![](https://i.ibb.co/GMm8N8r/EA-M2.png)

Modelo Relacional 

Supermercado  (<ins>numero</ins>,  morada, #nomeDepartamentoSuper→  Departamento) Pedido (<ins>codPedido</ins>,dataPedido,quantidadeProdutos,  #moradaArmazem→  Local) Cliente (<ins>email</ins>,  numTelemovel,  nome)

Produtos  (<ins>codProduto</ins>,  nome, preço)

Fornecedores (<ins>NIPC</ins>,  numTelefone,  nome, #nomeProdutos  → Produto) notaEncomenda  (<ins>codnotaEncomenda</ins>,  dataExecucao)

Departamentos\_Super  (<ins>siglaDepartamento</ins>,  nomeDepartamento) Departamentos\_Armazem  (<ins>siglaDepartamento</ins>,  nomeDepartamento)

Empregado  (<ins>ID</ins>,  morada, salario, dataNascimento, sexo, nome, numTelemovel, horasServiço, #empregadoNome  → Nome, #nomeDepartamentoArmazem  → Departamento, #nomeDepartmentoSuper  → Departamento)

Armazém (#empregadoNome  → Nome, #nomeDepartamentoArmazem  → Departamento)

efetua( <ins>#codPedido</ins>  →  Pedido, <ins>#numero</ins>  →  Supermercado) fazer(#<ins>codnotaEncomenda</ins>  →  notaEncomenda)

contem(#<ins>codnotaEncomenda</ins>  → notaEncomenda, #<ins>codProduto</ins>  → Produtos) 

armazena(#<ins>codProduto</ins>  →  Produtos) comprar(#<ins>codProduto</ins>  →  Produtos, #<ins>email</ins>→  Cliente) 

tipoProdutos(#<ins>codProdutos</ins>→  Produtos, <ins>tipo</ins>) local(#<ins>email</ins>→  Cliente, <ins>morada</ins>) tipoFornecedor(#<ins>NIPC</ins>→  fornecedores, <ins>tipoFornecedor</ins>)
