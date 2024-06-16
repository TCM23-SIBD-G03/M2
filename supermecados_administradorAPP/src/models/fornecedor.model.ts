import {Entity, model, property, hasMany} from '@loopback/repository';
import {Pedido} from './pedido.model';
import {Produto} from './produto.model';
import {Through} from './through.model';

@model()
export class Fornecedor extends Entity {
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
  nomeFornecedor: string;

  @property({
    type: 'string',
    required: true,
  })
  nifFornecedor: string;

  @property({
    type: 'string',
    required: true,
  })
  iban: string;

  @hasMany(() => Pedido)
  pedidos: Pedido[];

  @hasMany(() => Produto, {through: {model: () => Through}})
  FornecedoresDoProduto: Produto[];

  constructor(data?: Partial<Fornecedor>) {
    super(data);
  }
}

export interface FornecedorRelations {
  // describe navigational properties here
}

export type FornecedorWithRelations = Fornecedor & FornecedorRelations;
