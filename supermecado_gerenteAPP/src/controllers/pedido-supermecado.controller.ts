import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pedido,
  Supermecado,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoSupermecadoController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/supermecado', {
    responses: {
      '200': {
        description: 'Supermecado belonging to Pedido',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Supermecado),
          },
        },
      },
    },
  })
  async getSupermecado(
    @param.path.number('id') id: typeof Pedido.prototype.id,
  ): Promise<Supermecado> {
    return this.pedidoRepository.pedidosRealizados(id);
  }
}
