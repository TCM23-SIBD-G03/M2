import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Produto, ProdutoRelations, Fornecedor, Through, Pedido, Supermecado, Compra} from '../models';
import {ThroughRepository} from './through.repository';
import {FornecedorRepository} from './fornecedor.repository';
import {PedidoRepository} from './pedido.repository';
import {SupermecadoRepository} from './supermecado.repository';
import {CompraRepository} from './compra.repository';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {

  public readonly ProdutoFornecedor: HasManyThroughRepositoryFactory<Fornecedor, typeof Fornecedor.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  public readonly ProdutoPedido: HasManyThroughRepositoryFactory<Pedido, typeof Pedido.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  public readonly Stock: HasManyThroughRepositoryFactory<Supermecado, typeof Supermecado.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  public readonly listaCompras: HasManyThroughRepositoryFactory<Compra, typeof Compra.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>, @repository.getter('SupermecadoRepository') protected supermecadoRepositoryGetter: Getter<SupermecadoRepository>, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Produto, dataSource);
    this.listaCompras = this.createHasManyThroughRepositoryFactoryFor('listaCompras', compraRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('listaCompras', this.listaCompras.inclusionResolver);
    this.Stock = this.createHasManyThroughRepositoryFactoryFor('Stock', supermecadoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('Stock', this.Stock.inclusionResolver);
    this.ProdutoPedido = this.createHasManyThroughRepositoryFactoryFor('ProdutoPedido', pedidoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('ProdutoPedido', this.ProdutoPedido.inclusionResolver);
    this.ProdutoFornecedor = this.createHasManyThroughRepositoryFactoryFor('ProdutoFornecedor', fornecedorRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('ProdutoFornecedor', this.ProdutoFornecedor.inclusionResolver);
  }
}
