# C1 : Introdução


## Descrição do trabalho
O objetivo do nosso trabalho é desenvolver um sistema de informação para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, dados dos empregados e clientes. Essa cadeia é alimentada por um armazém central que tem como objetivo armazenar e distribuir (conforme as encomendas pedidas) produtos por cada um dos supermercados e receber stock dos distribuidores.
O armazém apresenta um responsável pela organização de cada secção de produto (cosméticos, congelados, bebidas, cereais). Cada departamento necessita de um empregado para o seu funcionamento. Cada supermercado é responsável por fazer pedidos de produtos ao armazém. O supermercado tem um determinado número de empregados, dos quais um é o gerente. 
Assim conclui-se que cada empregado está associado a um departamento.

O sistema de informação necessita guardar dados das distribuidoras afiliadas para realizar notas de encomendas (as notas de encomenda contem produtos quantidade de cada produto) com o objetivo de reposição do inventário do armazém. As notas de encomenda são realizadas pelo armazém.
É possível a fidelização de clientes através do cartão cliente que permite a empresa execute determinadas ações futuras.




## Modelação do problema

### **Entidades**:
  
  ARMAZEM (MoradaArmazem (rua, numeroDePorta, freguesia), NumEmpregadosArmazem, ArmazemID)
*	Morada: Morada do armazém constituída por uma rua, número de porta e freguesia.
*	NumEmpregados: Número de empregados que trabalham num armazém
*	ArmazemID: Número identificador exclusivo para cada armazém (Chave Primária)

PEDIDO (PedidoID, NumProdutos, DataExecucao)
*	PedidoID: Número identificador exclusivo para cada pedido (Chave Primária)
*	DataExecucao: Data de distribuição do pedido

SUPERMERDADO (SupermercadoID, MoradaSupermercado (rua, numeroDePorta, freguesia), NumEmpregadosSuper)
*	SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária)
*	MoradaSupermercado: Morada do armazém constituída por uma rua, número de porta e freguesia.
*	NumEmpregadosSuper: Número de empregados em cada supermercado.

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

PRODUTOS (ID, nome, preço, categoria, quantidadeStock, dataExpiracao) 
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
