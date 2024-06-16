import {Entity, model, property, hasMany} from '@loopback/repository';
import {Fornecedor} from './fornecedor.model';
import {Through} from './through.model';
import {Supermecado} from './supermecado.model';

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

  @hasMany(() => Fornecedor, {through: {model: () => Through}})
  ProdutoFornecedor: Fornecedor[];

  @hasMany(() => Supermecado, {through: {model: () => Through}})
  ProdutoSupermecado: Supermecado[];

  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
