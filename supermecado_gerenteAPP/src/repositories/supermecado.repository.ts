import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Supermecado, SupermecadoRelations, Pedido, Produto, Through} from '../models';
import {PedidoRepository} from './pedido.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class SupermecadoRepository extends DefaultCrudRepository<
  Supermecado,
  typeof Supermecado.prototype.id,
  SupermecadoRelations
> {

  public readonly realiza: HasManyRepositoryFactory<Pedido, typeof Supermecado.prototype.id>;

  public readonly SupermecadoProduto: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Supermecado.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('PedidoRepository') protected pedidoRepositoryGetter: Getter<PedidoRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Supermecado, dataSource);
    this.SupermecadoProduto = this.createHasManyThroughRepositoryFactoryFor('SupermecadoProduto', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('SupermecadoProduto', this.SupermecadoProduto.inclusionResolver);
    this.realiza = this.createHasManyRepositoryFactoryFor('realiza', pedidoRepositoryGetter,);
    this.registerInclusionResolver('realiza', this.realiza.inclusionResolver);
  }
}
