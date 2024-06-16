import {Entity, model, property, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Produto} from './produto.model';
import {Through} from './through.model';

@model()
export class Supermecado extends Entity {
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
  morada: string;

  @hasMany(() => Pedido)
  realiza: Pedido[];

  @hasMany(() => Produto, {through: {model: () => Through}})
  SupermecadoProduto: Produto[];

  constructor(data?: Partial<Supermecado>) {
    super(data);
  }
}

export interface SupermecadoRelations {
  // describe navigational properties here
}

export type SupermecadoWithRelations = Supermecado & SupermecadoRelations;
