import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Compra,
  Cliente,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraClienteController {
  constructor(
    @repository(CompraRepository)
    public compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Compra',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cliente),
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.number('id') id: typeof Compra.prototype.id,
  ): Promise<Cliente> {
    return this.compraRepository.cliente(id);
  }
}
