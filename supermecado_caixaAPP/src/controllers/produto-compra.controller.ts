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
Compra,
} from '../models';
import {ProdutoRepository} from '../repositories';

export class ProdutoCompraController {
  constructor(
    @repository(ProdutoRepository) protected produtoRepository: ProdutoRepository,
  ) { }

  @get('/produtos/{id}/compras', {
    responses: {
      '200': {
        description: 'Array of Produto has many Compra through Through',
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
    return this.produtoRepository.listaCompra(id).find(filter);
  }

  @post('/produtos/{id}/compras', {
    responses: {
      '200': {
        description: 'create a Compra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compra)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produto.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {
            title: 'NewCompraInProduto',
            exclude: ['id'],
          }),
        },
      },
    }) compra: Omit<Compra, 'id'>,
  ): Promise<Compra> {
    return this.produtoRepository.listaCompra(id).create(compra);
  }

  @patch('/produtos/{id}/compras', {
    responses: {
      '200': {
        description: 'Produto.Compra PATCH success count',
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
    return this.produtoRepository.listaCompra(id).patch(compra, where);
  }

  @del('/produtos/{id}/compras', {
    responses: {
      '200': {
        description: 'Produto.Compra DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.produtoRepository.listaCompra(id).delete(where);
  }
}
