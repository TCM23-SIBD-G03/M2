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
  Empregado,
} from '../models';
import {SupermecadoRepository} from '../repositories';

export class SupermecadoEmpregadoController {
  constructor(
    @repository(SupermecadoRepository) protected supermecadoRepository: SupermecadoRepository,
  ) { }

  @get('/supermecados/{id}/empregados', {
    responses: {
      '200': {
        description: 'Array of Supermecado has many Empregado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empregado)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Empregado>,
  ): Promise<Empregado[]> {
    return this.supermecadoRepository.empregados(id).find(filter);
  }

  @post('/supermecados/{id}/empregados', {
    responses: {
      '200': {
        description: 'Supermecado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Empregado)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Supermecado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empregado, {
            title: 'NewEmpregadoInSupermecado',
            exclude: ['id'],
            optional: ['supermecadoId']
          }),
        },
      },
    }) empregado: Omit<Empregado, 'id'>,
  ): Promise<Empregado> {
    return this.supermecadoRepository.empregados(id).create(empregado);
  }

  @patch('/supermecados/{id}/empregados', {
    responses: {
      '200': {
        description: 'Supermecado.Empregado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empregado, {partial: true}),
        },
      },
    })
    empregado: Partial<Empregado>,
    @param.query.object('where', getWhereSchemaFor(Empregado)) where?: Where<Empregado>,
  ): Promise<Count> {
    return this.supermecadoRepository.empregados(id).patch(empregado, where);
  }

  @del('/supermecados/{id}/empregados', {
    responses: {
      '200': {
        description: 'Supermecado.Empregado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Empregado)) where?: Where<Empregado>,
  ): Promise<Count> {
    return this.supermecadoRepository.empregados(id).delete(where);
  }
}
