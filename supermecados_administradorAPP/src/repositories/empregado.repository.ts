import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Empregado, EmpregadoRelations, Supermecado} from '../models';
import {SupermecadoRepository} from './supermecado.repository';

export class EmpregadoRepository extends DefaultCrudRepository<
  Empregado,
  typeof Empregado.prototype.id,
  EmpregadoRelations
> {

  public readonly supermecado: BelongsToAccessor<Supermecado, typeof Empregado.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('SupermecadoRepository') protected supermecadoRepositoryGetter: Getter<SupermecadoRepository>,
  ) {
    super(Empregado, dataSource);
    this.supermecado = this.createBelongsToAccessorFor('supermecado', supermecadoRepositoryGetter,);
    this.registerInclusionResolver('supermecado', this.supermecado.inclusionResolver);
  }
}
