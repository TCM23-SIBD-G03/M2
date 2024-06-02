# C4 : Esquema Relacional  <!-- omit in toc -->
_(Apresentar o esquema físico da Base de Dados. Para cada relação resultante, apresente a descrição da tabela correspondente usando o exemplo apresentado.)_

- [Relações](#relações)
  - [Tabela_a](#Tabela Produto)
  - [Tabela_b](#tabela_b)
- [Vistas](#vistas)

## Relações

### Tabela Produto

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| codProduto     | Codigo identificador exclusivo para cada produto  | INT     | -           | Não     | Não  |
| nome    | Nome de cada produto          | VARCHAR(50)     | -      | Não        | Não  |
| preco   | Preço de cada produto     | Float | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codProduto    |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| x xxxxxx    | codProduto   | Não    |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| ta_fk | tipo      | Tabela_c            | id                        | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
| x-xxxxxx-xxxxxxx   | codProduto  |codProduto>= 1000000000000 AND codProduto<= 9999999999999 |
- **Outros Indices***:

### Fornecedor

#### DESCRIÇÃO <!-- omit in toc -->

Descrição da Tabela B

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| fornecedorID       | identificador da tabela A | BIGINT      | -           | Não       | Não  |
| nome    | Data do registo           |      varChar(50)  |     | Não        | Não  |
| email     | Nome do registo           | VARCHAR(100) | -           | Não        | Não  |
| telefone| Conteudo do documento     | BIGINT(12) | -           | Não        | Não |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| nome_unique | nome      | Sim     |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| ta_fk | tipo      | Tabela_c            | id                        | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |

- **Outros Indices***:

| Nome | Coluna(s) |
| ---- | --------- |
|      |           |

  *Remover se não existir.

## Vistas

_(Inserir a descrição e estrutura das vista, caso existam.)_









### Tabela_b

#### DESCRIÇÃO <!-- omit in toc -->

Descrição da Tabela B

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| id       | identificador da tabela A | BIGINT      | -           | Sim        | Não  |
| data     | Data do registo           | DATE        | now()       | Não        | Não  |
| nome     | Nome do registo           | VARCHAR(50) | -           | Não        | Não  |
| conteudo | Conteudo do documento     | TEXT        | -           | Não        | Sim  |
| tipo     | tipo de testes            | BIGINT      | -           | Não        | Sim  |

#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| id        |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| nome_unique | nome      | Sim     |

- **Referêncial** (chaves estrangeiras)*:

| Nome  | Coluna(s) | Tabela referênciada | Coluna(s) referênciada(s) | Indexar |
| ----- | --------- | ------------------- | ------------------------- | ------- |
| ta_fk | tipo      | Tabela_c            | id                        | Não     |

- **Atributos** (check)*:

| Nome | Coluna(s) | condição |
| ---- | --------- | -------- |
|      |           |          |

- **Outros Indices***:

| Nome | Coluna(s) |
| ---- | --------- |
|      |           |

  *Remover se não existir.

## Vistas

_(Inserir a descrição e estrutura das vista, caso existam.)_

---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
