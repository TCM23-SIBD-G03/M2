# C4 : Esquema Relacional  <!-- omit in toc -->
_(Apresentar o esquema físico da Base de Dados. Para cada relação resultante, apresente a descrição da tabela correspondente usando o exemplo apresentado.)_

- [Relações](#relações)
  - [Tabela_a](#Tabela Produto)
  - [Tabela_b](#tabela_b)
- [Vistas](#vistas)

## Relações

### Produto

#### DESCRIÇÃO <!-- omit in toc -->



#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| codProduto     | Codigo identificador exclusivo para cada produto  | Int    | -           | Não     | Não  |
| nome    | Nome de cada produto          | VARCHAR(50)     | -      | Não        | Não  |
| preco   | Preço de cada produto     | FLOAT | -           | Não        | Não  |
#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| codProduto    |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| x-xxxxxx-xxxxxxx   | codProduto   | Não    |

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
| fornecedorID| identificador unico do fornecedor| BIGINT      | -           | Sim      | Não  |
| nome    | Nome da empresa fornocedora       |     VARCHAR(50)  |     | Não        | Não  |
| email     | Email da empresa fornocedora       | VARCHAR(100) | -           | Não        | Não  |
| telefone| Contacto da empresa fornocedora     | INT(12) | -           | Não        | Não |


#### RESTRIÇÕES DE INTEGRIDADE <!-- omit in toc -->

- **Chave Primária**: 

| Coluna(s) |
| --------- |
| fornecedorID  |

- **Unicidade** (valores únicos)*:

| Nome        | Coluna(s) | Indexar |
| ----------- | --------- | ------- |
| id_unico | fornecedorID   | Não     |
| id_unico | email    | Não     |
| id_unico | telefone    | Não     |

### Cliente

#### DESCRIÇÃO <!-- omit in toc -->

Descrição da Tabela B

#### COLUNAS <!-- omit in toc -->

| Nome     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| nif      | numero de identificação fiscal| Int(9)     | -           | Não       | Não  |
| telemovel    | Contacto do cliente           | INT(9)      |      | Não        | Não  |
| nome    | Nome do cliente        | VARCHAR(50) | -           | Não        | Não  |
| email| email pessoal do cliente   | VARCHAR(50)     | -           | Não        | Sim  |
| morada   | morada do cliente| VARCHAR(50)    | -           | Não        | Sim  |

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
