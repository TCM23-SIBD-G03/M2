# C1 : Introdução


## Descrição do trabalho
O objetivo do nosso trabalho é desenvolver um sistema de informação para uma pequena cadeia de supermercados situados na área da Maia como o objetivo de melhorar a sua logística, dados dos empregados e clientes. Essa cadeia é alimentada por um armazém central que tem como objetivo armazenar e distribuir (conforme as encomendas pedidas) produtos por cada um dos supermercados e receber stock dos distribuidores.
O armazém apresenta um responsável pela organização de cada secção de produto (cosméticos, congelados, bebidas, cereais). Cada departamento necessita de um empregado para o seu funcionamento. Cada supermercado e responsável por fazer pedidos de produtos ao armazém. O supermercado tem um determinado número de empregados, dos quais um é o gerente. 
Assim conclui-se que cada empregado está associado a um departamento.

O sistema de informação necessita guardar dados das distribuidoras afiliadas para realizar notas de encomendas (as notas de encomenda contem produtos quantidade de cada produto) com o objetivo de reposição do inventário do armazém. As notas de encomenda são realizadas pelo armazém.
É possível a fidelização de clientes através do cartão cliente que permite a empresa execute determinadas ações.
Entidades:
O armazém necessita de uma morada, x número de empregados para o seu funcionamento cada funcionário com a seu departamento. 

-Cada pedido tem um id, quantidade de produtos, data de execução

-Cada supermercado apresenta número, localização (rua, numeroDePorta), número de empregados.

-Empregadas horas de serviço, nome, número, sexo, endereço, salário, data de nascimento.

-Para adesão ao cartão cliente é necessário nome, morada, data de nascimento, sexo, telefone, e-mail dos clientes.

-Os produtos apresentam um id, nome, preço, categoria (bebidas, cereais, etc), quantidade em estoque e data de expiração.

-A informação que se pretende guardar das distribuidoras afiliadas -nome, telefone, tipo de produtos que distribuem e dados para pagamento (NIPC, IBAN)

-As notas de encomenda (NE) (número, data, quantidade). 



## Modelação do problema

_(Apresentar os pressupostos utilizados na modelação do problema, estes pressupostos poderão não estar na descrição do trabalho)_


---
[< Previous](rei00.md) | [^ Main](/../../) | [Next >](rei02.md)
:--- | :---: | ---: 
