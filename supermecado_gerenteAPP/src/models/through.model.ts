import {Entity, model, property} from '@loopback/repository';

@model()
export class Through extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  fornecedorId?: number;

  @property({
    type: 'number',
  })
  produtoId?: number;

  @property({
    type: 'number',
  })
  supermecadoId?: number;

  constructor(data?: Partial<Through>) {
    super(data);
  }
}

export interface ThroughRelations {
  // describe navigational properties here
}

export type ThroughWithRelations = Through & ThroughRelations;
