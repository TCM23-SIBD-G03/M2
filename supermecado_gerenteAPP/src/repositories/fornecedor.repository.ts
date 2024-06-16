import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations, Pedido, Produto, Through} from '../models';
import {PedidoRepository} from './pedido.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.id,
  FornecedorRelations
> {

  public readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Fornecedor.prototype.id>;

  public readonly FornecedorProduto: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Fornecedor.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Fornecedor, dataSource);
    this.FornecedorProduto = this.createHasManyThroughRepositoryFactoryFor('FornecedorProduto', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('FornecedorProduto', this.FornecedorProduto.inclusionResolver);
    this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidoRepositoryGetter,);
    this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
  }
}
