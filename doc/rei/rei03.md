# C3 : Esquema conceptual

## Modelo E/A

  
![Modelo EA Supermecados](https://raw.githubusercontent.com/TCM23-SIBD-G03/TCM23-SIBD-G03/main/doc/rei/images/ModeloER_Supermecado.png)   

### **Entidades**:
  

SUPERMERDADO (supermercadoID, morada (rua, numeroDePorta, freguesia))
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	MoradaSupermercado: Morada do supermecado constituída por uma rua, número de porta e freguesia.


EMPREGADO (nome, empregadoID, sexo, morada, salario, cargo, dataNascimento; numeroTelemovel)
*	nome: Nome completo de cada empregado.
*	empregadoID: Número identificador exclusivo para cada empregado. (Chave Primária)
*	sexo: Género de cada empregado.
*	morada: Morada de cada empregado
*	salario: Salário de cada empregado
*	cargo: cargo de cada empregado
*   dataNascimento: data de nascimento de cada empregado
*   numeroTelemovel: número de telemóvel de cada empregado

CLIENTE (nome, morada, ,email,numeroTelemovel, nifCliente)
*	NOME: nome de cada cliente
*	MORADA: morada de cada cliente
*	numeroTelemovel: número de telemóvel de cada cliente
*	Email: E-mail de cada cliente.
*	nifCliente: Número identificador exclusivo para cada cliente (Chave Primária).

PRODUTO (codProduto, nome, preco) 
*	codPRODUTO: Número identificador exclusivo para cada produto (Chave Primária).
*	nome: Nome de cada produto
*   preco: Preço de cada produto

FORNECEDOR (nome, email,iban, nifFornecedor)
*	nome: Nome da distribuidora(Chave Primária)
*   email: E-mail de cada fornecedor
*   iban: iban de cada fornecedor
*   nifFornecedor: Número identificador exclusivo para cada fornecedor .

PEDIDO (dataPedido, numeroPedido)
*   dataPedido: data de cada pedido
*   numeroPedido: Número identificador exclusivo para cada pedido (Chave Primária).

STOCK (quantidade)
*   quantidade: quantidade de produtos em stock

COMPRA (dataCompra, NumeroCompra)
*   dataCompra: data de cada compra
*   NumeroCompra: Número identificador exclusivo para cada compra (Chave Primária).

### **Associações**:
* Faz(Supermercado,pedido)                     M:N T|T
* Fornece(Fornecedor,Produto)                  M:N T|T
* Vende(Supermercado,Produto)                  M:N P|P
* TrabalhaPara(Empregado,Supermercado)         1:N T|T
* Gerencia(Empregado,Supermercado)             1:1 P|T
* Armazena(Supermercado, Stock)                1:1 T|P
* EnviadaPara(Pedido,Fornecedor)               1:N T|P
* atualiza(Compra, Stock)                      N:1 P|T
* Realiza(Cliente, Compra)                     1:N P|T
* ConstutuidoPor(Pedido, Produto)              M:N T|P
* Contem(Stock, Produto)                       M:N T|P

## Regras de negócio adicionais (Restrições)
_(Apresentar uma lista detalhada das regras e restrições não possíveis de representar no modelo E/A, que visam a manutenção da consistência e integridade da modelação do problema)_

---
[< Previous](rei02.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
