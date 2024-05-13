C1- Introdução: Descrição do trabalho: 

O objetivo do nosso trabalho é desenvolver um sistema de informação para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, dados dos empregados e clientes. Essa cadeia é alimentada por um armazém central que tem como objetivo armazenar e distribuir (conforme as encomendas pedidas) produtos por cada um dos supermercados e receber stock dos distribuidores. 

Para resolver este problema temos de criar um sistema de identificação que esteja conectado à base de dados central de forma a permitir uma boa organização entre as diferentes entidades. 

É possível a fidelização de clientes através do cartão cliente que permite a empresa execute determinadas ações. 

Entidades: 

ARMAZEM (MoradaArmazem (rua, numeroDePorta, freguesia), NumEmpregadosArmazem, ArmazemID) 

- Morada: Morada do armazém constituída por uma rua, número de porta e freguesia. 
- ArmazemID: Número identificador exclusivo para cada armazém (Chave Primária) 

PEDIDO (codPedido, NumProdutos, DataExecucao) 

- PedidoID: Número identificador exclusivo para cada pedido (Chave Primária) 
- DataExecucao: Data de distribuição do pedido 

SUPERMERDADO (SupermercadoID, MoradaSupermercado (rua, numeroDePorta, freguesia),) 

- SupermercadoID: Número identificador exclusivo para cada supermercado (Chave Primária) 
- MoradaSupermercado: Morada do armazém constituída por uma rua, número de porta e freguesia. 

EMPREGADOS (HorasDeServiço, NomeEmpregado, EmpregadoID, sexo, endereço, salario, dataNascimento) 

- HorasDeServiço: Horas de serviço de cada empregado. 
- ID: Nome completo de cada empregado. 
- EmpregadoID: Número identificador exclusivo para cada empregado. (Chave Primária) 
- Sexo: Género de cada empregado. 
- Endereço: Morada de cada empregado 
- Salario: Salário de cada empregado 
- dataNascimento: Data de nascimento de cada empregado. 

CLIENTE (nome, morada,, sexo, telefone, e-mail) 

- Nome: nome de cada cliente 
- Morada: morada de cada cliente 
- dataNascimento: Data de nascimento de cada cliente. 
- Sexo: Género de cada cliente 
- Telefone: Número de telefone de cada cliente 
- E-mail: E-mail de cada cliente. 

PRODUTOS (codProduto, nome, preço, categoria)  

- ID: Número identificador exclusivo para cada produto (Chave Primária). 
- Nome: Nome de cada produto 
- Preço: Preço de cada produto 
- Categoria: Categoria de cada produto 

FORNECEDORES (nome, telefone, tipoProdutos, dadosPagamento (NIPC, IBAN)) 

- Nome: Nome da distribuidora 
- Telefone: Número de telefone de uma distribuidora 
- tipoProdutos: Tipo de produtos que distribuem 
- NIPC: Identificação do fornecedor, para faturação (NIPC, IBAN) (Chave Primária). 

Associações: 

O armazém armazena produtos; 

A notas de encomendas são efetuadas pelo armazém. 

A notas de encomendas contem pelo armazém. 

Supermercado efetua o pedido 

Supermercado vende produtos  

O pedido e direcionado para o armazém 

As notas de encomenda contem produtos e informação do respetivo distribuidor. Os supermercados contem produtos 

O cliente pode estar associado a um cartão cliente 

Um empregado gere um supermercado 

Um empregado gere um Armazém 

Empregado trabalha em um departamento do supermercado 

Empregado trabalha em um departamento do Armazém 

O armazém esta dividido em departamentos 

O armazém esta dividido em departamentos 

O cliente está associado cartão cliente 
