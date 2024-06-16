import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Fornecedor, Produto, Through} from '../models';
import {FornecedorRepository} from './fornecedor.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {

  public readonly fornecedor: BelongsToAccessor<Fornecedor, typeof Pedido.prototype.id>;

  public readonly listaPedido: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Pedido.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Pedido, dataSource);
    this.listaPedido = this.createHasManyThroughRepositoryFactoryFor('listaPedido', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('listaPedido', this.listaPedido.inclusionResolver);
    this.fornecedor = this.createBelongsToAccessorFor('fornecedor', fornecedorRepositoryGetter,);
    this.registerInclusionResolver('fornecedor', this.fornecedor.inclusionResolver);
  }
}
