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
import {Supermecado} from '../models';
import {SupermecadoRepository} from '../repositories';

export class SupermecadoController {
  constructor(
    @repository(SupermecadoRepository)
    public supermecadoRepository : SupermecadoRepository,
  ) {}

  @post('/supermecados')
  @response(200, {
    description: 'Supermecado model instance',
    content: {'application/json': {schema: getModelSchemaRef(Supermecado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Supermecado, {
            title: 'NewSupermecado',
            exclude: ['id'],
          }),
        },
      },
    })
    supermecado: Omit<Supermecado, 'id'>,
  ): Promise<Supermecado> {
    return this.supermecadoRepository.create(supermecado);
  }

  @get('/supermecados/count')
  @response(200, {
    description: 'Supermecado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Supermecado) where?: Where<Supermecado>,
  ): Promise<Count> {
    return this.supermecadoRepository.count(where);
  }

  @get('/supermecados')
  @response(200, {
    description: 'Array of Supermecado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Supermecado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Supermecado) filter?: Filter<Supermecado>,
  ): Promise<Supermecado[]> {
    return this.supermecadoRepository.find(filter);
  }

  @patch('/supermecados')
  @response(200, {
    description: 'Supermecado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Supermecado, {partial: true}),
        },
      },
    })
    supermecado: Supermecado,
    @param.where(Supermecado) where?: Where<Supermecado>,
  ): Promise<Count> {
    return this.supermecadoRepository.updateAll(supermecado, where);
  }

  @get('/supermecados/{id}')
  @response(200, {
    description: 'Supermecado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Supermecado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Supermecado, {exclude: 'where'}) filter?: FilterExcludingWhere<Supermecado>
  ): Promise<Supermecado> {
    return this.supermecadoRepository.findById(id, filter);
  }

  @patch('/supermecados/{id}')
  @response(204, {
    description: 'Supermecado PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Supermecado, {partial: true}),
        },
      },
    })
    supermecado: Supermecado,
  ): Promise<void> {
    await this.supermecadoRepository.updateById(id, supermecado);
  }

  @put('/supermecados/{id}')
  @response(204, {
    description: 'Supermecado PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() supermecado: Supermecado,
  ): Promise<void> {
    await this.supermecadoRepository.replaceById(id, supermecado);
  }

  @del('/supermecados/{id}')
  @response(204, {
    description: 'Supermecado DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.supermecadoRepository.deleteById(id);
  }
}
