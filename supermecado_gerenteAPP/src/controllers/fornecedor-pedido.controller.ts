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
  Pedido,
} from '../models';
import {FornecedorRepository} from '../repositories';

export class FornecedorPedidoController {
  constructor(
    @repository(FornecedorRepository) protected fornecedorRepository: FornecedorRepository,
  ) { }

  @get('/fornecedors/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Array of Fornecedor has many Pedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Pedido>,
  ): Promise<Pedido[]> {
    return this.fornecedorRepository.pedidos(id).find(filter);
  }

  @post('/fornecedors/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pedido)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Fornecedor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {
            title: 'NewPedidoInFornecedor',
            exclude: ['id'],
            optional: ['fornecedorId']
          }),
        },
      },
    }) pedido: Omit<Pedido, 'id'>,
  ): Promise<Pedido> {
    return this.fornecedorRepository.pedidos(id).create(pedido);
  }

  @patch('/fornecedors/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Fornecedor.Pedido PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {partial: true}),
        },
      },
    })
    pedido: Partial<Pedido>,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.fornecedorRepository.pedidos(id).patch(pedido, where);
  }

  @del('/fornecedors/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Fornecedor.Pedido DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.fornecedorRepository.pedidos(id).delete(where);
  }
}
