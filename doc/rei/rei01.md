# C1 : Introdução


## Descrição do trabalho
* O objetivo do nosso trabalho é desenvolver um sistema de gestão para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, e organização de dados.

* Cada supermercado emprega mais de que um  empregado e esse só pode trabalhar para apenas um dos supermercados. Dos empregados que trabalham para um supermercado ,um deles é responsável pela gerência do supermercado e fundamental para o correto funcionamento do mesmo. 
Deve ser possível na Base de dados, armazenar o SALARIO ,sexo , morada, data de nascimento e numero de telemóvel de cada emprega, e cada um tem deve ter um ID associado.
* Também e necessário ter acesso  aos produtos que cada supermercado vende, uma vez que cada supermercado pode vender uma maior variedade de produtos ou até mesmo vender produtos diferentes. O produto é caracterizados por um, nome ,código de produto ,produtor e o preço atual e cada um deve pertencer a um tipo de produto ,para permitir uma melhor gestão dos diferentes produtos do mesmo tipo que os supermercados vendem e dos fornecedores dos diferentes tipos de produtos.

* Os fornecedores que fornecem produtos aos supermercados podem fornecer diferentes tipos de produtos, ou fornecer apenas um tipo de produto.

* Também e possível aos clientes ,tornarem-se afiliados ao aderirem ao cartão cliente para poderem beneficiar de acumulação de pontos na compra de uma certa quantidade de produtos,  caso apresentem o cartão no momento de compra  . Para criar o cartão os clientes tem de fornecer, morada , numero de telemóvel ,email, nome e será atribuído um id a cada cliente.
Logo é necessário armazenar a data de compra, quantidade e o produto comprado de cada cliente de forma a se poder consultar a compras feitas por um cliente afiliado.






## Modelação do problema

### **Entidades**:
  



SUPERMERDADO (\_SupermercadoID\_, Morada (rua, numeroDePorta, freguesia))
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	MoradaSupermercado: Morada do armazém constituída por uma rua, número de porta e freguesia.


EMPREGADOS (\_Nome\_, ID, SEXO, MORADA, SALARIO, dataNascimento,numTELEMOVEL)
*	NOME: Nome completo de cada empregado.
*	EID: Número identificador exclusivo para cada empregado. (Chave Primária)
*	Sexo: Género de cada empregado.
*	MORADA: Morada de cada empregado
*	SALARIO: Salário de cada empregado
*	dataNascimento: Data de nascimento de cada empregado.
* numTELEMOVEL

clienteAFILIADO (NOME, MORADA, dataNascimento,EMAIL, ID)
*	NOME: nome de cada cliente
*	MORADA: morada de cada cliente
*	numTELEMOVEL:
*	Email: E-mail de cada cliente.
*	ID: Número identificador exclusivo para cada cliente (Chave Primária).

PRODUTO (codPRODUTO, NOME, preçoATUAL,PRODUTOR) 
*	codPRODUTO: Número identificador exclusivo para cada produto (Chave Primária).
*	NOME: Nome de cada produto
* preçoATUAL: Preço de cada produto
* PRODUTOR:empresa que produz o produto

tipoPRODUTO(tipoNOME,tipoID)
* tipoNOME:tipo do produto(ex,Lacticínios,bebidas,etc)
* tipoID:numero atribuido cada tipo de produto diferente

Fornecedor (NOME, numTELEFONE, EMAIL)
*	NOME: Nome da distribuidora
*	numTELEFONE: Número de telefone do fornecedor
* EMAIL:E-mail de cada FORNECEDOR

### **Associações**:

* Compra(clienteAFILIADO,Produto)              M:N P|P
* Pertence(Produto,tipoProduto)                M:N T|P  
* fornece(Fornecedor,tipoProduto)              M:N P|P
* vende(SUPERMECADO,Produto)                   M:N P|P
* TrabalhaPara(EMPREGADO,SUPERMECADO)          1:N T|T
* Gerencia(EMPREGADO,sUPERMECADO)              1:1 T|P



---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
