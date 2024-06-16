import {Entity, model, property, hasMany} from '@loopback/repository';
import {Compra} from './compra.model';

@model()
export class Cliente extends Entity {
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
  nomeCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  nifCliente: string;

  @property({
    type: 'string',
  })
  morada?: string;

  @property({
    type: 'number',
  })
  numTelemovel?: number;

  @property({
    type: 'string',
  })
  email?: string;

  @hasMany(() => Compra)
  compras: Compra[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
