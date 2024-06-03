# C1 : Introdução


## Descrição do trabalho
* O objetivo do nosso trabalho é desenvolver um sistema de gestão para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, e organização de dados.

* Cada supermercado emprega mais de que um  empregado e esse só pode trabalhar para apenas um dos supermercados. Dos empregados que trabalham para um supermercado ,um deles é responsável pela gerência do supermercado e é fundamental para o correto funcionamento do mesmo. 
Deve ser possível na Base de dados, armazenar o salario ,sexo , morada, data de nascimento e numero de telemóvel de cada empregado, e cada um tem deve ter um ID associado.
* Também e necessário ter acesso  aos produtos que cada supermercado vende, uma vez que cada supermercado pode vender uma maior variedade de produtos ou até mesmo vender produtos diferentes. O produto é caracterizados por um, nome ,código de produto ,produtor e o preço, e cada um deve pertencer a um tipo de produto ,para permitir uma melhor gestão dos diferentes produtos do mesmo tipo que os supermercados vendem e dos fornecedores dos diferentes tipos de produtos.

* Os fornecedores que fornecem produtos aos supermercados podem fornecer diferentes tipos de produtos, ou fornecer apenas um tipo de produto.

* Também e possível aos clientes ,tornarem-se afiliados ao aderirem ao cartão cliente para poderem beneficiar de acumulação de pontos na compra de uma certa quantidade de produtos,  caso apresentem o cartão no momento de compra  . Para criar o cartão os clientes tem de fornecer, morada , numero de telemóvel ,email, nome e será atribuído um id a cada cliente.
Logo é necessário armazenar a data de compra, quantidade e o produto comprado de cada cliente de forma a se poder consultar a compras feitas por um cliente afiliado.






## Modelação do problema

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



---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
