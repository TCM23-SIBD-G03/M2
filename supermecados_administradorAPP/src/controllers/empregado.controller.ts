import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Empregado} from '../models';
import {EmpregadoRepository} from '../repositories';

export class EmpregadoController {
  constructor(
    @repository(EmpregadoRepository)
    public empregadoRepository : EmpregadoRepository,
  ) {}

  @post('/empregados')
  @response(200, {
    description: 'Empregado model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empregado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empregado, {
            title: 'NewEmpregado',
            exclude: ['id'],
          }),
        },
      },
    })
    empregado: Omit<Empregado, 'id'>,
  ): Promise<Empregado> {
    return this.empregadoRepository.create(empregado);
  }

  @get('/empregados/count')
  @response(200, {
    description: 'Empregado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empregado) where?: Where<Empregado>,
  ): Promise<Count> {
    return this.empregadoRepository.count(where);
  }

  @get('/empregados')
  @response(200, {
    description: 'Array of Empregado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empregado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empregado) filter?: Filter<Empregado>,
  ): Promise<Empregado[]> {
    return this.empregadoRepository.find(filter);
  }

  @patch('/empregados')
  @response(200, {
    description: 'Empregado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empregado, {partial: true}),
        },
      },
    })
    empregado: Empregado,
    @param.where(Empregado) where?: Where<Empregado>,
  ): Promise<Count> {
    return this.empregadoRepository.updateAll(empregado, where);
  }

  @get('/empregados/{id}')
  @response(200, {
    description: 'Empregado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empregado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Empregado, {exclude: 'where'}) filter?: FilterExcludingWhere<Empregado>
  ): Promise<Empregado> {
    return this.empregadoRepository.findById(id, filter);
  }

  @patch('/empregados/{id}')
  @response(204, {
    description: 'Empregado PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empregado, {partial: true}),
        },
      },
    })
    empregado: Empregado,
  ): Promise<void> {
    await this.empregadoRepository.updateById(id, empregado);
  }

  @put('/empregados/{id}')
  @response(204, {
    description: 'Empregado PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empregado: Empregado,
  ): Promise<void> {
    await this.empregadoRepository.replaceById(id, empregado);
  }

  @del('/empregados/{id}')
  @response(204, {
    description: 'Empregado DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empregadoRepository.deleteById(id);
  }
}
