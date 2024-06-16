import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {CdDataSource} from '../datasources';
import {Produto, ProdutoRelations, Compra, Through} from '../models';
import {ThroughRepository} from './through.repository';
import {CompraRepository} from './compra.repository';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {

  public readonly listaCompra: HasManyThroughRepositoryFactory<Compra, typeof Compra.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  constructor(
    @inject('datasources.cd') dataSource: CdDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Produto, dataSource);
    this.listaCompra = this.createHasManyThroughRepositoryFactoryFor('listaCompra', compraRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('listaCompra', this.listaCompra.inclusionResolver);
  }
}
