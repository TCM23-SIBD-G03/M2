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
  Supermecado,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraSupermecadoController {
  constructor(
    @repository(CompraRepository)
    public compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/supermecado', {
    responses: {
      '200': {
        description: 'Supermecado belonging to Compra',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Supermecado),
          },
        },
      },
    },
  })
  async getSupermecado(
    @param.path.number('id') id: typeof Compra.prototype.id,
  ): Promise<Supermecado> {
    return this.compraRepository.ComprasSupermecado(id);
  }
}
