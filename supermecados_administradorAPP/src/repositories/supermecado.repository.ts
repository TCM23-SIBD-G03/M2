import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Supermecado, SupermecadoRelations, Empregado, Compra, Produto, Through} from '../models';
import {EmpregadoRepository} from './empregado.repository';
import {CompraRepository} from './compra.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class SupermecadoRepository extends DefaultCrudRepository<
  Supermecado,
  typeof Supermecado.prototype.id,
  SupermecadoRelations
> {

  public readonly empregados: HasManyRepositoryFactory<Empregado, typeof Supermecado.prototype.id>;

  public readonly Compras_Supermecado: HasManyRepositoryFactory<Compra, typeof Supermecado.prototype.id>;

  public readonly STOCK: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Supermecado.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('EmpregadoRepository') protected empregadoRepositoryGetter: Getter<EmpregadoRepository>, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Supermecado, dataSource);
    this.STOCK = this.createHasManyThroughRepositoryFactoryFor('STOCK', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('STOCK', this.STOCK.inclusionResolver);
    this.Compras_Supermecado = this.createHasManyRepositoryFactoryFor('Compras_Supermecado', compraRepositoryGetter,);
    this.registerInclusionResolver('Compras_Supermecado', this.Compras_Supermecado.inclusionResolver);
    this.empregados = this.createHasManyRepositoryFactoryFor('empregados', empregadoRepositoryGetter,);
    this.registerInclusionResolver('empregados', this.empregados.inclusionResolver);
  }
}
