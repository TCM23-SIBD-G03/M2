import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {CdDataSource} from '../datasources';
import {Compra, CompraRelations, Cliente, Produto, Through} from '../models';
import {ClienteRepository} from './cliente.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.id,
  CompraRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Compra.prototype.id>;

  public readonly produtos: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Compra.prototype.id
        >;

  constructor(
    @inject('datasources.cd') dataSource: CdDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Compra, dataSource);
    this.produtos = this.createHasManyThroughRepositoryFactoryFor('produtos', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('produtos', this.produtos.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
