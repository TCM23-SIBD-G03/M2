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
Through,
Produto,
} from '../models';
import {SupermecadoRepository} from '../repositories';

export class SupermecadoProdutoController {
  constructor(
    @repository(SupermecadoRepository) protected supermecadoRepository: SupermecadoRepository,
  ) { }

  @get('/supermecados/{id}/produtos', {
    responses: {
      '200': {
        description: 'Array of Supermecado has many Produto through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Produto>,
  ): Promise<Produto[]> {
    return this.supermecadoRepository.STOCK(id).find(filter);
  }

  @post('/supermecados/{id}/produtos', {
    responses: {
      '200': {
        description: 'create a Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Supermecado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {
            title: 'NewProdutoInSupermecado',
            exclude: ['id'],
          }),
        },
      },
    }) produto: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    return this.supermecadoRepository.STOCK(id).create(produto);
  }

  @patch('/supermecados/{id}/produtos', {
    responses: {
      '200': {
        description: 'Supermecado.Produto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {partial: true}),
        },
      },
    })
    produto: Partial<Produto>,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.supermecadoRepository.STOCK(id).patch(produto, where);
  }

  @del('/supermecados/{id}/produtos', {
    responses: {
      '200': {
        description: 'Supermecado.Produto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.supermecadoRepository.STOCK(id).delete(where);
  }
}
