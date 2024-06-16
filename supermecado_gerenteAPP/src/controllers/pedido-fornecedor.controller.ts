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
  Fornecedor,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoFornecedorController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/fornecedor', {
    responses: {
      '200': {
        description: 'Fornecedor belonging to Pedido',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Fornecedor),
          },
        },
      },
    },
  })
  async getFornecedor(
    @param.path.number('id') id: typeof Pedido.prototype.id,
  ): Promise<Fornecedor> {
    return this.pedidoRepository.PedidosEnviados(id);
  }
}
