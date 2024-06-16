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
Fornecedor,
Through,
Produto,
} from '../models';
import {FornecedorRepository} from '../repositories';

export class FornecedorProdutoController {
  constructor(
    @repository(FornecedorRepository) protected fornecedorRepository: FornecedorRepository,
  ) { }

  @get('/fornecedors/{id}/produtos', {
    responses: {
      '200': {
        description: 'Array of Fornecedor has many Produto through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Produto>,
  ): Promise<Produto[]> {
    return this.fornecedorRepository.FornecedorProduto(id).find(filter);
  }

  @post('/fornecedors/{id}/produtos', {
    responses: {
      '200': {
        description: 'create a Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Fornecedor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {
            title: 'NewProdutoInFornecedor',
            exclude: ['id'],
          }),
        },
      },
    }) produto: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    return this.fornecedorRepository.FornecedorProduto(id).create(produto);
  }

  @patch('/fornecedors/{id}/produtos', {
    responses: {
      '200': {
        description: 'Fornecedor.Produto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {partial: true}),
        },
      },
    })
    produto: Partial<Produto>,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.fornecedorRepository.FornecedorProduto(id).patch(produto, where);
  }

  @del('/fornecedors/{id}/produtos', {
    responses: {
      '200': {
        description: 'Fornecedor.Produto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.fornecedorRepository.FornecedorProduto(id).delete(where);
  }
}
