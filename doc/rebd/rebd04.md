# C4 : Esquema Relacional  <!-- omit in toc -->


- [Relações](#relações)
  - [Tabela_Produto](#Tabela_Produto)
  - [Tabela_Fornecedor](#Tabela_Fornecedor)
  - [Tabela_Cliente](#Tabela_Cliente)
  - [Tabela_Compra](#Tabela_Compra)
  - [Tabela_Pedido](#Tabela_Pedido)
  - [Tabela_Supermecado](#Tabela_Supermecado)
  - [Tabela_Empregado](#Tabela_Empregado)
  - [Tabela_PedidosRealizados](#Tabela_PedidosRealizados)
  - [Tabela_ListaDeProdutosPedidos](#Tabela_ListaDeProdutosPedidos)
  - [Tabela_SupermecadoVende](#Tabela_SupermecadoVende)
  - [Tabela_Stock](#Tabela_Stock)
    
    
- [Vistas](#vistas)

## Relações

### Tabela_Produto

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda a informação necessária dos produtos vendido  nos supermercados.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| codProduto     | Codigo identificador exclusivo para cada produto  | Int    | -           | Não     | Não  |
| nome    | Nome de cada produto          | VARCHAR(50)     | -      | Não        | Não  |
| preco   | Preço de cada produto     | FLOAT() | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codProduto    |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| x-xxxxxx-xxxxxxx   | codProduto   | Não    |



- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
| x-xxxxxx-xxxxxxx   | codProduto  |codProduto>= 1000000000000 AND codProduto<= 9999999999999 |


### Tabela_Fornecedor

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda a informação necessária dos fornecedores de produtos  .
#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| nifFornecedor|  Numero de identifição fiscal unico do fornecedor|INT(9)      | -           | Não     | Não  |
| nome    | Nome da empresa fornocedora       |     VARCHAR(50)  |     | Não        | Não  |
| email     | Email da empresa fornocedora       | VARCHAR(100) | -           | Não        | Não  |
| telefone| Contacto da empresa fornocedora     | INT(12) | -           | Não        | Não |
| iban| número de conta de pagamento fornecedor  | VARCHAR(34) | -           | Não        | Não |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| nome |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| id_unico | nome  | Não     |
| id_unico | email    | Não     |
| id_unico | telefone    | Não     |

### Tabela_Cliente

#### DESCRIÇÃO <!-- omit in toc -->
Esta tabela tem como objetivo armazenar toda a informação necessária dos Clientes.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| nifCliente     | numero de identificação fiscal| Int(9)     | -           | Não       | Não  |
| telemovel    | Contacto do cliente           | INT(9)      |      | Não        | Não  |
| nome    | Nome do cliente        | VARCHAR(50) | -           | Não        | Não  |
| email| email pessoal do cliente   | VARCHAR(50)     | -           | Não        | Sim  |
| morada   | morada do cliente| VARCHAR(50)    | -           | Não        | Sim  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| nifCliente |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| Nif_unico=xxxxxxxxx | nif|Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| ta_fk | tipo      | Tabela_c            | id                        | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |


### Tabela_Compra

#### DESCRIÇÃO <!-- omit in toc -->
Esta tabela tem como objetivo armazenar toda as  compras realizadas numa determinada data.
#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroCompra     | Numero adiconado a cada compra feita| Int(9)     | -           | Sim     | Não  |
| dataCompra    | Data do registo de compra         | DATE    |  now()    | Não        | Não  |
|nifCliente|Nif do cliente que realizou a compra|Int(9) |-|Não|Não|
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| compraID        |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| Nif_unico=xxxxxxxxx | nif|Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| nifcliente_fk | nifCliente | Tabela_Cliente     | nifCliente                   | Não     |


- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |



_(Inserir a descrição e estrutura das vista, caso existam.)_

### Tabela_Pedido

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda os pedidos feitos pelo supermecado e data que foi realizado.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido      | Numero de pedido adicionada a cada pedido feito pelo supermecado| Int(9)     | -           | Sim   | Não  |
| dataPedido   | Data do registo do pedido        | DATE    |  now()    | Não        | Não  |
| nome    | Nome da empresa fornocedora       |     VARCHAR(50)  |     | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| compraID        |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| Nif_unico=xxxxxxxxx | nif|Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| nomeFornecedor_fk | Fornecedor| Tabela_Fornecedor   | nome           | Não     |



### Tabela_Supermecado

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar e identificar todos os supermecados que fazem parte da cadeia de supermecados.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| supermecadoID    | Numero que identifica o supermecado| Int(10)     | -           | Sim   | Não  |
| morada  | Data do registo do pedido        | VARCHAR(50)    |  -    | Não        | Não  |
|gerenteID| id do empregado reponsavel por gerir o supermecado|int(10)|-|Não|| Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| supermecadoID |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| ID_UNICO |supermecado |Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| empregadoID_fk | gerenteID   | Tabela_Empregado      | empregadoID                       | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |


### Tabela_Empregado

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar na base de dados toda a informção necessaria dos empregados .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| empregadoID    | Numero atribuido a cada empregado| Int(10)     | -           | Sim   | Não  |
| sexo   | sexo do empregado| CHAR(1)   | -           | Não  | Não |
| morada  | Data do registo do pedido        | VARCHAR(50)    |  -    | Não        | Não  |
| supermecado  | Id do supermecado que o empregado trabalha| Int(10)     | -           | Não   | Não  |
| salario | valor a receber | FLOAT()     | -           | Não   | Não  |
| cargo | função que realiza | VARCHAR(10)     | -           | Não   | Não  |
| horasServiso | carga horária obrigatoria| Int(10)     | -           | Não   | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| empregadoID |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| ID_UNICO |empregadoID |Não    |


- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| supernecadoID_fk | Supermecado  | Tabela_Supermecado      | supermecado ID                       | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |     sexo  |    sexoValido CHECK(gender IN ('F','M'))      |

### Tabela_PedidosRealizados

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar na base de dados todos os pedidos realizados pelo supermecado  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido    | Numero  adicionada a cada pedido feito pelo supermecado| Int(9) | -           | Não  | Não  |
| supermecadoID   | Numero que identifica o supermecado| Int(10)    | -           | Não  | Não |
| dataPedido   | Data do registo do pedido        | DATE    |  now()    | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| numeroPedido |
|supermecadoID |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| ID_UNICO |empregadoID |Não    |


- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| supermecadoID_fk | Supermecado  | Tabela_Supermecado      | supermecado ID      | Não     |
|numeroPedido| numeroPedido| Tabela_Pedido     | numeroPedido     | Não     |

### Tabela_ListaDeProdutosPedidos

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os produtos pedidos pelo supermecado e a sua quantidade  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido    | Numero  adicionada a cada pedido feito pelo supermecado| Int(9) | -           | Não  | Não  |
| dataPedido   | Data do registo do pedido        | DATE    |  now()    | Não        | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | Int    | -           | Não     | Não  |
| nome    | Nome de cada produto          | VARCHAR(50)     | -      | Não        | Não  |
| preco   | Preço de cada produto     | FLOAT() | -           | Não        | Não  |
| quantidade  |  unidades pedidas de um produto | Int(4) | -           | Não  | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| numeroPedido |
| codProduto|

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| ID_UNICO |empregadoID |Não    |


- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|numeroPedido_fk| numeroPedido| Tabela_Pedido     | numeroPedido     | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |
### Tabela_SupermecadoVende

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os produtos que o supermecado vende  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| supermecadoID    | Numero que identifica o supermecado| Int(10)     | -           | Sim   | Não  |
| morada  | Data do registo do pedido        | VARCHAR(50)    |  -    | Não        | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | Int    | -           | Não     | Não  |
| nome    | Nome de cada produto          | VARCHAR(50)     | -      | Não        | Não  |
| preco   | Preço de cada produto     | FLOAT() | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
|supermecadoID  |
| codProduto|
- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| codProduto_Unico|codProduto_Unico |Não    |
| nomeProduto_Unico|codProduto_Unico |Não    |



- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|nsupermecadoID_fk| supermecadoID| Tabela_Supermecado    | supermecadoID     | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |

---
### Tabela_Stock

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,a quantidade de produtos em stock num determinado supermecado.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |

| supermecadoID    | Numero que identifica o supermecado| Int(10)     | -           | Sim   | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | Int    | -           | Não     | Não  |
| quantidade  |  unidades em stock de um produto | Int(4) | -           | Não  | Não  |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
|quantidade  |




- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|supermecadoID_fk| supermecadoID| Tabela_Supermecado    | supermecadoID     | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |

---

| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
