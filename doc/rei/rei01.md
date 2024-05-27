# C1 : Introdução


## Descrição do trabalho
* O objetivo do nosso trabalho é desenvolver um sistema de gestão para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, e organização de dados.

* Cada supermercado emprega mais de que um  empregado e esse só pode trabalhar para apenas um dos supermercados. Dos empregados que trabalham para um supermercado ,um deles é responsável pela gerência do supermercado e fundamental para o correto funcionamento do mesmo. 
Deve ser possível na Base de dados, armazenar o salario ,sexo , morada, data de nascimento e numero de telemóvel de cada emprega, e cada um tem deve ter um ID associado.
* Também e necessário ter acesso  aos produtos que cada supermercado vende, uma vez que cada supermercado pode vender uma maior variedade de produtos ou até mesmo vender produtos diferentes. O produto é caracterizados por um, nome ,código de produto ,produtor e o preço atual e cada um deve pertencer a um tipo de produto ,para permitir uma melhor gestão dos diferentes produtos do mesmo tipo que os supermercados vendem e dos fornecedores dos diferentes tipos de produtos.

* Os fornecedores que fornecem produtos aos supermercados podem fornecer diferentes tipos de produtos, ou fornecer apenas um tipo de produto.

* Também e possível aos clientes ,tornarem-se afiliados ao aderirem ao cartão cliente para poderem beneficiar de acumulação de pontos na compra de uma certa quantidade de produtos,  caso apresentem o cartão no momento de compra  . Para criar o cartão os clientes tem de fornecer, morada , numero de telemóvel ,email, nome e será atribuído um id a cada cliente.
Logo é necessário armazenar a data de compra, quantidade e o produto comprado de cada cliente de forma a se poder consultar a compras feitas por um cliente afiliado.






## Modelação do problema

### **Entidades**:
  



SUPERMERDADO (\_SupermercadoID\_, Morada (rua, numeroDePorta, freguesia))
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	MoradaSupermercado: Morada do armazém constituída por uma rua, número de porta e freguesia.


EMPREGADOS (HorasDeServiço, NomeEmpregado, EmpregadoID, sexo, endereço, salario, dataNascimento)
*	HorasDeServiço: Horas de serviço de cada empregado.
*	NomeEmpregado: Nome completo de cada empregado.
*	EmpregadoID: Número identificador exclusivo para cada empregado. (Chave Primária)
*	Sexo: Género de cada empregado.
*	Endereço: Morada de cada empregado
*	Salario: Salário de cada empregado
*	dataNascimento: Data de nascimento de cada empregado.

CLIENTE (nome, morada, dataNascimento, sexo, telefone, e-mail, id)
*	Nome: nome de cada cliente
*	Morada: morada de cada cliente
*	dataNascimento: Data de nascimento de cada cliente.
*	Sexo: Género de cada cliente
*	Telefone: Número de telefone de cada cliente
*	E-mail: E-mail de cada cliente.
*	ID: Número identificador exclusivo para cada cliente (Chave Primária).

PRODUTOS (ID, nome, preço, tipodeProdutos, quantidadeStock, dataExpiracao) 
*	ID: Número identificador exclusivo para cada produto (Chave Primária).
*	Nome: Nome de cada produto
*	Preço: Preço de cada produto
*	Categoria: Categoria de cada produto
*	QuantidadeStock: quantidade de stock de cada produto
*	dataExpiração: Data que um determinado produto expira (depende da categoria do produto).

DISTRUBUIDORAS (nome, telefone, tipoProdutos, dadosPagamento (NIPC, IBAN))
*	Nome: Nome da distribuidora
*	Telefone: Número de telefone de uma distribuidora
*	tipoProdutos: Tipo de produtos que distribuem
*	dadosPagamento: Dados para se poder pagar ás distribuidoras (NIPC, IBAN) (Chave Primária).

### **Associações**:
* O armazém **armazena** produtos;
* A notas de encomendas **são efetuadas** pelo armazém.
* Supermercado faz **pedidos** ao armazém 
* As notas de encomenda contem **produtos** e informação do respetivo distribuidor.
* Os supermercados **contem** produtos
* O cliente pode estar **associado** a um cartão cliente
* Um empregado **administra** um supermercado




---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
