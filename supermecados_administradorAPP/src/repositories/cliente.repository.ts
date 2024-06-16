import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Compra} from '../models';
import {CompraRepository} from './compra.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly comprasCliente: HasManyRepositoryFactory<Compra, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Cliente, dataSource);
    this.comprasCliente = this.createHasManyRepositoryFactoryFor('comprasCliente', compraRepositoryGetter,);
    this.registerInclusionResolver('comprasCliente', this.comprasCliente.inclusionResolver);
  }
}
