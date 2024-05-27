# C3 : Esquema conceptual

## Modelo E/A

  
![Modelo EA Supermecados](doc/rei/images/Supermecado.png)   

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


## Regras de negócio adicionais (Restrições)
_(Apresentar uma lista detalhada das regras e restrições não possíveis de representar no modelo E/A, que visam a manutenção da consistência e integridade da modelação do problema)_

---
[< Previous](rei02.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
