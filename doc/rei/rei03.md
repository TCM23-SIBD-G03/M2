# C3 : Esquema conceptual

## Modelo E/A

  
![Modelo EA Supermecados](doc/rei/images/SupermecadoModelo_ER.png)   

### **Entidades**:
  

SUPERMERDADO (supermercadoID, morada (rua, numeroDePorta, freguesia))
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	moradaSupermercado: morada do supermecado constituída por uma rua, número de porta e freguesia.


EMPREGADO (nome, empregadoID, sexo, morada, salario, cargo, dataNascimento; numeroTelemovel)
*	nome: nome completo de cada empregado.
*	empregadoID: Número identificador exclusivo para cada empregado. (Chave Primária)
*	sexo: Género de cada empregado.
*	morada: morada de cada empregado
*	salario: Salário de cada empregado
*	cargo: cargo de cada empregado
*   dataNascimento: data de nascimento de cada empregado
*   numeroTelemovel: número de telemóvel de cada empregado

CLIENTE (nome, morada, ,email,numeroTelemovel, nifCliente)
*   idCliente:numero identificador dos cliente(Chave Primária)
*	nome: nome de cada cliente
*	morada: morada de cada cliente
*	numeroTelemovel: número de telemóvel de cada cliente
*	email: E-mail de cada cliente.
*	nifCliente: Número identificador exclusivo para cada cliente (Chave Primária).

PRODUTO (codProduto, nome, preco) 
*	codPRODUTO: Número identificador exclusivo para cada produto (Chave Primária).
*	nome: nome de cada produto
*   preco: Preço de cada produto

FORNECEDOR (nome, email,iban, nifFornecedor)
*   idFornecedor: numero identificador dos fornecedores(Chave Primária)
*	nome: nome da distribuidora
*   email: E-mail de cada fornecedor
*   iban: iban de cada fornecedor
*   nifFornecedor: Número identificador exclusivo para cada fornecedor .

PEDIDO (dataPedido, numeroPedido)
*   dataPedido: data de cada pedido
*   numeroPedido: Número identificador exclusivo para cada pedido (Chave Primária).


COMPRA (dataCompra, NumeroCompra)
*   dataCompra: data de cada compra
*   NumeroCompra: Número identificador exclusivo para cada compra (Chave Primária).

### **Associações**:
* realiza(Supermercado,pedido)                 N:1 P|T
* fornece(Fornecedor,Produto)                  M:N T|T
* temStock(Supermercado,Produto)               M:N P|P
* trabalhaPara(Empregado,Supermercado)         1:N T|T
* gerencia(Empregado,Supermercado)             1:1 P|T
* enviadaPara(Pedido,Fornecedor)               M:N T|P
* listaPedido(Pedido,Produto)                  M:N T|P
* exerce(Cliente, Compra)                      1:N P|T
* listaCompra(Compra, Produto)                 M:N T|P
* exercidaEm(Comprea,Supermecado)              1:N T|P

## Regras de negócio adicionais (Restrições)
_(Apresentar uma lista detalhada das regras e restrições não possíveis de representar no modelo E/A, que visam a manutenção da consistência e integridade da modelação do problema)_

---
[< Previous](rei02.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
