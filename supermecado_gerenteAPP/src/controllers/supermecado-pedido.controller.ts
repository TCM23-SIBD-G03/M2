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
  Supermecado,
  Pedido,
} from '../models';
import {SupermecadoRepository} from '../repositories';

export class SupermecadoPedidoController {
  constructor(
    @repository(SupermecadoRepository) protected supermecadoRepository: SupermecadoRepository,
  ) { }

  @get('/supermecados/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Array of Supermecado has many Pedido',
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
    return this.supermecadoRepository.realiza(id).find(filter);
  }

  @post('/supermecados/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Supermecado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pedido)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Supermecado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pedido, {
            title: 'NewPedidoInSupermecado',
            exclude: ['id'],
            optional: ['supermecadoId']
          }),
        },
      },
    }) pedido: Omit<Pedido, 'id'>,
  ): Promise<Pedido> {
    return this.supermecadoRepository.realiza(id).create(pedido);
  }

  @patch('/supermecados/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Supermecado.Pedido PATCH success count',
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
    return this.supermecadoRepository.realiza(id).patch(pedido, where);
  }

  @del('/supermecados/{id}/pedidos', {
    responses: {
      '200': {
        description: 'Supermecado.Pedido DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Pedido)) where?: Where<Pedido>,
  ): Promise<Count> {
    return this.supermecadoRepository.realiza(id).delete(where);
  }
}
