import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Supermecado} from './supermecado.model';
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

  @belongsTo(() => Supermecado, {name: 'ComprasSupermecado'})
  supermecadoId: number;

  @belongsTo(() => Cliente, {name: 'clienteCompras'})
  clienteId: number;

  @hasMany(() => Produto, {through: {model: () => Through}})
  listaCompra: Produto[];

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
