import {Entity, model, property, hasMany} from '@loopback/repository';
import {Compra} from './compra.model';
import {Through} from './through.model';

@model()
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  codProduto: number;

  @property({
    type: 'string',
    required: true,
  })
  nomeProduto: string;

  @hasMany(() => Compra, {through: {model: () => Through}})
  listaCompra: Compra[];

  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
