import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Empregado,
  Supermecado,
} from '../models';
import {EmpregadoRepository} from '../repositories';

export class EmpregadoSupermecadoController {
  constructor(
    @repository(EmpregadoRepository)
    public empregadoRepository: EmpregadoRepository,
  ) { }

  @get('/empregados/{id}/supermecado', {
    responses: {
      '200': {
        description: 'Supermecado belonging to Empregado',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Supermecado),
          },
        },
      },
    },
  })
  async getSupermecado(
    @param.path.number('id') id: typeof Empregado.prototype.id,
  ): Promise<Supermecado> {
    return this.empregadoRepository.supermecado(id);
  }
}
