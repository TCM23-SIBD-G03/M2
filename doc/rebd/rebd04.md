# C4 : Esquema Relacional  <!-- omit in toc -->


- [Relações](#relações)
  - [Tabela_Produto](#Tabela_Produto)
  - [Tabela_Fornecedor](#Tabela_Fornecedor)
  - [Tabela_Cliente](#Tabela_Cliente)
  - [Tabela_Compra](#Tabela_Compra)
  - [Tabela_Pedido](#Tabela_Pedido)
  - [Tabela_Supermecado](#Tabela_Supermecado)
  - [Tabela_Empregado](#Tabela_Empregado)
  - [Tabela_PedidosDoSupermecado](#Tabela_PedidosDoSupermecado)
  - [Tabela_FornecedoreDoProduto](#Tabela_FornecedoreDoProduto)
  - [Tabela_ListaDaCompra](#Tabela_ListaDaCompra)
  - [Tabela_ListaProdutosPedido](#Tabela_ListaProdutosPedido)
  - [Tabela_Stock](#Tabela_Stock)
    
    
- [Vistas](#vistas)

## Relações

### Tabela_Produto

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda a informação necessária dos produtos vendido  nos supermercados.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| codProduto     | Codigo identificador exclusivo para cada produto  | int(13)  | -           | Não     | Não  |
| nomeProduto    | Nome de cada produto          | varchar(50)     | -      | Não        | Não  |
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
| x-xxxxxx-xxxxxxx   | codProduto  | CHECK (LENGTH(codProduto) = 13)|


### Tabela_Fornecedor

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda a informação necessária dos fornecedores de produtos  .
#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idFornecedor     | numero de identificaçãodo do fornecedor| int(9)     | -           | Não       | Não  |
| nifFornecedor|  Numero de identifição fiscal unico do fornecedor|int(9)      | -           | Não     | Não  |
| nome    | Nome da empresa fornocedora       |     varchar(50)  |     | Não        | Não  |
| email     | Email da empresa fornocedora       | varchar() | -           | Não        | Não  |
| telefone| Contacto da empresa fornocedora     | int(12) | -           | Não        | Não |
| iban| número de conta de pagamento fornecedor  | varchar(34) | -           | Não        | Não |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| idFornecedor |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| nome_unico | nome  | Não     |
| email_unico | email    | Não     |
| telefone_unico | telefone    | Não     |

### Tabela_Cliente

#### DESCRIÇÃO <!-- omit in toc -->
Esta tabela tem como objetivo armazenar toda a informação necessária dos Clientes.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idCliente     | numero de identificaçãodo cliente| int(9)     | -           | Não       | Não  |
| nifCliente     | numero de identificação fiscal| int(9)     | -           | Não       | Não  |
| telemovel    | Contacto do cliente           | int(9)      |      | Não        | Não  |
| nome    | Nome do cliente        | varchar(50) | -           | Não        | Não  |
| email| email pessoal do cliente   | varchar(50)     | -           | Não        | Sim  |
| morada   | morada do cliente| varchar(50)    | -           | Não        | Sim  |

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
| numeroCompra     | Numero adiconado a cada compra feita| int(9)     | -           | Sim     | Não  |
| dataCompra    | Data do registo de compra         | DATE    |  now()    | Não        | Não  |
| idCliente     | numero de identificaçãodo cliente| int(9)     | -           | Não       | Não  |
| supermecadoID    | Numero que identifica o supermecado| int(2)     | -           | Sim   | Não  |
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
| idCliente_fk | idCliente| Tabela_Cliente     | nifCliente                   | Não     |
| supermecadoID _fk |supermecadoID   | Tabela_Supermecado     | supermecadoID                    | Não     |


- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |





### Tabela_Pedido

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar toda os pedidos feitos pelo supermecado e data que foi realizado.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido      | Numero de pedido adicionada a cada pedido feito pelo supermecado| int(9)     | -           | Sim   | Não  |
| dataPedido   | Data do registo do pedido        | DATE    |  now()    | Não        | Não  |
| nome    | Nome da empresa fornocedora       |     varchar(50)  |     | Não        | Não  |
| supermecadoID    | Numero que identifica o supermecado| int(2)     | -           | Sim   | Não  |
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
| supermecadoID _fk |supermecadoID   | Tabela_Supermecado     | supermecadoID                    | Não     |



### Tabela_Supermecado

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar e identificar todos os supermecados que fazem parte da cadeia de supermecados.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| supermecadoID    | Numero que identifica o supermecado| int(2)     | -           | Sim   | Não  |
| morada  | Data do registo do pedido        | varchar(50)    |  -    | Não        | Não  |
|gerenteID| id do empregado reponsavel por gerir o supermecado|int(10)|-|Não|| Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| supermecadoID |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| supermecadoID_UNICO |supermecado |Não    |
| gerenteID_UNICO |Empregado |Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |


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
| empregadoID    | Numero atribuido a cada empregado| int(10)     | -           | Sim   | Não  |
| sexo   | sexo do empregado| CHAR(1)   | -           | Não  | Não |
| morada  | Data do registo do pedido        | varchar(50)    |  -    | Não        | Não  |
| supermecadoID  | Id do supermecado que o empregado trabalha| int(2)     | -           | Não   | Não  |
| salario | valor a receber | FLOAT()     | -           | Não   | Não  |
| cargo | função que realiza | varchar(10)     | -           | Não   | Não  |
| horasServiso | carga horária obrigatoria| int(10)     | -           | Não   | Não  |

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

### Tabela_PedidosDoSupermecado

#### DESCRIÇÃO <!-- omit in toc -->

Esta tabela tem como objetivo armazenar na base de dados todos os pedidos realizados pelo supermecado  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido    | Numero  adicionada a cada pedido feito pelo supermecado| int(9) | -           | Não  | Não  |
| supermecadoID   | Numero que identifica o supermecado| int(10)    | -           | Não  | Não |
| morada  | Data do registo do pedido        | varchar(50)    |  -    | Não        | Não  |
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

### Tabela_FornecedoreDoProduto

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os fornecedores de determinados produtos.

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idFornecedor     | numero de identificaçãodo do fornecedor| int(9)     | -           | Não       | Não  |
| nifFornecedor|  Numero de identifição fiscal unico do fornecedor|int(9)      | -           | Não     | Não  |
| nome    | Nome da empresa fornocedora       |     varchar(50)  |     | Não        | Não  |
| email     | Email da empresa fornocedora       | varchar() | -           | Não        | Não  |
| telefone| Contacto da empresa fornocedora     | int(12) | -           | Não        | Não |
| iban| número de conta de pagamento fornecedor  | varchar(34) | -           | Não        | Não |
| codProduto     | Codigo identificador exclusivo para cada produto  | int(13)  | -           | Não     | Não  |
| nomeProduto    | Nome de cada produto          | varchar(50)     | -      | Não        | Não  |
| precoSupermecado  | Preço de cada produto no supermecado     | decimal() | -           | Não        | Não  |
| precoFornecedor  | Preço de cada produto do fornecedor   | decimal() | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| idFornecedor |
| codProduto|

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|idFornecedor_fk| idFornecedor| Tabela_Forbecedor    | idFornecedor     | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |
### Tabela_ListaDaCompra

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os produtos que o supermecado vende  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroCompra     | Numero adiconado a cada compra feita| int(9)     | -           | Sim     | Não  |
| dataCompra    | Data do registo de compra         | DATE    |  now()    | Não        | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | int(13)  | -           | Não     | Não  |
| nomeProduto    | Nome de cada produto          | varchar(50)     | -      | Não        | Não  |
| precoSupermecado  | Preço de cada produto     | decimal() | -           | Não        | Não  |
| quantidade | quantidade de produto comprado|int() | -           | Não        | Não  |
| precoTotalComp | Preço total da compra    | decimal() | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
|numeroCompra  |
| codProduto |




- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|numeroCompra_fk| numeroCompra | Tabela_Compra   | numeroCompra   | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |

---
### Tabela_ListaProdutosPedido

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os produtos que o supermecado vende  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numeroPedido      | Numero de pedido adicionada a cada pedido feito pelo supermecado| int(9)     | -           | Sim   | Não  |
| dataPedido   | Data do registo do pedido        | DATE    |  now()    | Não        | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | int(13)  | -           | Não     | Não  |
| nomeProduto    | Nome de cada produto          | varchar(50)     | -      | Não        | Não  |
| quantidade | quantidade de produto pedido|int() | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
|numeroPedido   |
| codProduto |




- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|numeroPedido_fk| numeroPedido   | Tabela_Pedido | numeroPedido    | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |

---
### Tabela_Stock

#### DESCRIÇÃO <!-- omit in toc -->

Está tabela tem como objetivo armazenar na base de dados,os produtos que o supermecado vende  .

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| supermecadoID    | Numero que identifica o supermecado| int(2)     | -           | Sim   | Não  |
| morada  | Data do registo do pedido        | varchar(50)    |  -    | Não        | Não  |
| codProduto     | Codigo identificador exclusivo para cada produto  | int(13)  | -           | Não     | Não  |
| nomeProduto    | Nome de cada produto          | varchar(50)     | -      | Não        | Não  |
| precoVendido | Preço de cada produto     | decimal() | -           | Não        | Não  |
| quantidade | quantidade de produto em stock|int() | -           | Não        | Não  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
|supermecadoID    |
| codProduto |




- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
|supermecadoID_fk| supermecadoID  | Tabela_Supermecado | supermecadoID   | Não     |
| codProduto_fk |codProduto| Tabela_Produto    | codProduto      | Não     |

---

| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
