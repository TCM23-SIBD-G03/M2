import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Supermecado, Fornecedor} from '../models';
import {SupermecadoRepository} from './supermecado.repository';
import {FornecedorRepository} from './fornecedor.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {

  public readonly pedidosRealizados: BelongsToAccessor<Supermecado, typeof Pedido.prototype.id>;

  public readonly PedidosEnviados: BelongsToAccessor<Fornecedor, typeof Pedido.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SupermecadoRepository') protected supermecadoRepositoryGetter: Getter<SupermecadoRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>,
  ) {
    super(Pedido, dataSource);
    this.PedidosEnviados = this.createBelongsToAccessorFor('PedidosEnviados', fornecedorRepositoryGetter,);
    this.registerInclusionResolver('PedidosEnviados', this.PedidosEnviados.inclusionResolver);
    this.pedidosRealizados = this.createBelongsToAccessorFor('pedidosRealizados', supermecadoRepositoryGetter,);
    this.registerInclusionResolver('pedidosRealizados', this.pedidosRealizados.inclusionResolver);
  }
}
