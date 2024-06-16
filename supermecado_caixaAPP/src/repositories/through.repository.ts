import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CdDataSource} from '../datasources';
import {Through, ThroughRelations} from '../models';

export class ThroughRepository extends DefaultCrudRepository<
  Through,
  typeof Through.prototype.id,
  ThroughRelations
> {
  constructor(
    @inject('datasources.cd') dataSource: CdDataSource,
  ) {
    super(Through, dataSource);
  }
}
