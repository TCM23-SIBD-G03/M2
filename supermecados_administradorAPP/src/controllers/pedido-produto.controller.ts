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
Pedido,
Through,
Produto,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoProdutoController {
  constructor(
    @repository(PedidoRepository) protected pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/produtos', {
    responses: {
      '200': {
        description: 'Array of Pedido has many Produto through Through',
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
    return this.pedidoRepository.listaPedido(id).find(filter);
  }

  @post('/pedidos/{id}/produtos', {
    responses: {
      '200': {
        description: 'create a Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Pedido.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {
            title: 'NewProdutoInPedido',
            exclude: ['id'],
          }),
        },
      },
    }) produto: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    return this.pedidoRepository.listaPedido(id).create(produto);
  }

  @patch('/pedidos/{id}/produtos', {
    responses: {
      '200': {
        description: 'Pedido.Produto PATCH success count',
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
    return this.pedidoRepository.listaPedido(id).patch(produto, where);
  }

  @del('/pedidos/{id}/produtos', {
    responses: {
      '200': {
        description: 'Pedido.Produto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.pedidoRepository.listaPedido(id).delete(where);
  }
}
