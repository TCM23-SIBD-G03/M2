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
Produto,
Through,
Supermecado,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoSupermecadoController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/supermecados', {
    responses: {
      '200': {
        description: 'Array of Produto has many Supermecado through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Supermecado)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Supermecado>,
  ): Promise<Supermecado[]> {
    return this.produtoRepository.ProdutoSupermecado(id).find(filter);
  }

  @post('/produtos/{id}/supermecados', {
    responses: {
      '200': {
        description: 'create a Supermecado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Supermecado)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Supermecado, {
            title: 'NewSupermecadoInProduto',
            exclude: ['id'],
          }),
        },
      },
    }) supermecado: Omit<Supermecado, 'id'>,
  ): Promise<Supermecado> {
    return this.produtoRepository.ProdutoSupermecado(id).create(supermecado);
  }

  @patch('/produtos/{id}/supermecados', {
    responses: {
      '200': {
        description: 'Produto.Supermecado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Supermecado, {partial: true}),
        },
      },
    })
    supermecado: Partial<Supermecado>,
    @param.query.object('where', getWhereSchemaFor(Supermecado)) where?: Where<Supermecado>,
  ): Promise<Count> {
    return this.produtoRepository.ProdutoSupermecado(id).patch(supermecado, where);
  }

  @del('/produtos/{id}/supermecados', {
    responses: {
      '200': {
        description: 'Produto.Supermecado DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Supermecado)) where?: Where<Supermecado>,
  ): Promise<Count> {
    return this.produtoRepository.ProdutoSupermecado(id).delete(where);
  }
}
