import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Produto} from './produto.model';
import {Through} from './through.model';

@model()
export class Compra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  dataCompra: string;

  @belongsTo(() => Cliente)
  clienteId: number;

  @hasMany(() => Produto, {through: {model: () => Through}})
  produtos: Produto[];

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
