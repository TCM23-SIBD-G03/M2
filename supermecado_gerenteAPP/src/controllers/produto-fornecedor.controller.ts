import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Produto,
Through,
Fornecedor,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoFornecedorController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Array of Produto has many Fornecedor through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fornecedor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Fornecedor>,
  ): Promise<Fornecedor[]> {
    return this.produtoRepository.ProdutoFornecedor(id).find(filter);
  }

  @post('/produtos/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'create a Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fornecedor)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {
            title: 'NewFornecedorInProduto',
            exclude: ['id'],
          }),
        },
      },
    }) fornecedor: Omit<Fornecedor, 'id'>,
  ): Promise<Fornecedor> {
    return this.produtoRepository.ProdutoFornecedor(id).create(fornecedor);
  }

  @patch('/produtos/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Produto.Fornecedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {partial: true}),
        },
      },
    })
    fornecedor: Partial<Fornecedor>,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.produtoRepository.ProdutoFornecedor(id).patch(fornecedor, where);
  }

  @del('/produtos/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Produto.Fornecedor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.produtoRepository.ProdutoFornecedor(id).delete(where);
  }
}
