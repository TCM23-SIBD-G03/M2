import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Compra, CompraRelations, Supermecado, Cliente, Produto, Through} from '../models';
import {SupermecadoRepository} from './supermecado.repository';
import {ClienteRepository} from './cliente.repository';
import {ThroughRepository} from './through.repository';
import {ProdutoRepository} from './produto.repository';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.id,
  CompraRelations
> {

  public readonly ComprasSupermecado: BelongsToAccessor<Supermecado, typeof Compra.prototype.id>;

  public readonly clienteCompras: BelongsToAccessor<Cliente, typeof Compra.prototype.id>;

  public readonly listaCompra: HasManyThroughRepositoryFactory<Produto, typeof Produto.prototype.id,
          Through,
          typeof Compra.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SupermecadoRepository') protected supermecadoRepositoryGetter: Getter<SupermecadoRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('ThroughRepository') protected throughRepositoryGetter: Getter<ThroughRepository>, @repository.getter('ProdutoRepository') protected produtoRepositoryGetter: Getter<ProdutoRepository>,
  ) {
    super(Compra, dataSource);
    this.listaCompra = this.createHasManyThroughRepositoryFactoryFor('listaCompra', produtoRepositoryGetter, throughRepositoryGetter,);
    this.registerInclusionResolver('listaCompra', this.listaCompra.inclusionResolver);
    this.clienteCompras = this.createBelongsToAccessorFor('clienteCompras', clienteRepositoryGetter,);
    this.registerInclusionResolver('clienteCompras', this.clienteCompras.inclusionResolver);
    this.ComprasSupermecado = this.createBelongsToAccessorFor('ComprasSupermecado', supermecadoRepositoryGetter,);
    this.registerInclusionResolver('ComprasSupermecado', this.ComprasSupermecado.inclusionResolver);
  }
}
