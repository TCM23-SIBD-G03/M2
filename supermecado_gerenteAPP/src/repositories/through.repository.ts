import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Through, ThroughRelations} from '../models';

export class ThroughRepository extends DefaultCrudRepository<
  Through,
  typeof Through.prototype.id,
  ThroughRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Through, dataSource);
  }
}
