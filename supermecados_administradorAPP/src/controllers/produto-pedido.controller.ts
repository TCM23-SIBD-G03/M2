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
Pedido,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoPedidoController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Array of Produto has many Pedido through Through',
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
    return this.produtoRepository.ProdutoPedido(id).find(filter);
  }

  @post('/produtos/{id}/pedidos', {
    responses: {
      '200': {
        description: 'create a Pedido model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pedido)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {
            title: 'NewPedidoInProduto',
            exclude: ['id'],
          }),
        },
      },
    }) pedido: Omit<Pedido, 'id'>,
  ): Promise<Pedido> {
    return this.produtoRepository.ProdutoPedido(id).create(pedido);
  }

  @patch('/produtos/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Produto.Pedido PATCH success count',
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
    return this.produtoRepository.ProdutoPedido(id).patch(pedido, where);
  }

  @del('/produtos/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Produto.Pedido DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.produtoRepository.ProdutoPedido(id).delete(where);
  }
}
