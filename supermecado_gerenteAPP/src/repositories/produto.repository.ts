import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Produto, ProdutoRelations, Fornecedor, Through, Supermecado} from '../models';
import {ThroughRepository} from './through.repository';
import {FornecedorRepository} from './fornecedor.repository';
import {SupermecadoRepository} from './supermecado.repository';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.id,
  ProdutoRelations
> {

  public readonly ProdutoFornecedor: HasManyThroughRepositoryFactory<Fornecedor, typeof Fornecedor.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  public readonly ProdutoSupermecado: HasManyThroughRepositoryFactory<Supermecado, typeof Supermecado.prototype.id,
          Through,
          typeof Produto.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>, @repository.getter('SupermecadoRepository') protected supermecadoRepositoryGetter: Getter<SupermecadoRepository>,
  ) {
    super(Produto, dataSource);
    this.ProdutoSupermecado = this.createHasManyThroughRepositoryFactoryFor('ProdutoSupermecado', supermecadoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('ProdutoSupermecado', this.ProdutoSupermecado.inclusionResolver);
    this.ProdutoFornecedor = this.createHasManyThroughRepositoryFactoryFor('ProdutoFornecedor', fornecedorRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('ProdutoFornecedor', this.ProdutoFornecedor.inclusionResolver);
  }
}
