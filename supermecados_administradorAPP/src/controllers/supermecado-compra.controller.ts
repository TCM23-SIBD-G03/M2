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
  Compra,
} from '../models';
import {SupermecadoRepository} from '../repositories';

export class SupermecadoCompraController {
  constructor(
    @repository(SupermecadoRepository) protected supermecadoRepository: SupermecadoRepository,
  ) { }

  @get('/supermecados/{id}/compras', {
    responses: {
      '200': {
        description: 'Array of Supermecado has many Compra',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Compra)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Compra>,
  ): Promise<Compra[]> {
    return this.supermecadoRepository.Compras_Supermecado(id).find(filter);
  }

  @post('/supermecados/{id}/compras', {
    responses: {
      '200': {
        description: 'Supermecado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compra)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Supermecado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {
            title: 'NewCompraInSupermecado',
            exclude: ['id'],
            optional: ['supermecadoId']
          }),
        },
      },
    }) compra: Omit<Compra, 'id'>,
  ): Promise<Compra> {
    return this.supermecadoRepository.Compras_Supermecado(id).create(compra);
  }

  @patch('/supermecados/{id}/compras', {
    responses: {
      '200': {
        description: 'Supermecado.Compra PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {partial: true}),
        },
      },
    })
    compra: Partial<Compra>,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.supermecadoRepository.Compras_Supermecado(id).patch(compra, where);
  }

  @del('/supermecados/{id}/compras', {
    responses: {
      '200': {
        description: 'Supermecado.Compra DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.supermecadoRepository.Compras_Supermecado(id).delete(where);
  }
}
