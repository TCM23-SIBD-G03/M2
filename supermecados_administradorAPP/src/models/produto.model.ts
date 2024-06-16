import {Entity, model, property, hasMany} from '@loopback/repository';
import {Fornecedor} from './fornecedor.model';
import {Through} from './through.model';
import {Pedido} from './pedido.model';
import {Supermecado} from './supermecado.model';
import {Compra} from './compra.model';

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

  @hasMany(() => Pedido, {through: {model: () => Through}})
  ProdutoPedido: Pedido[];

  @hasMany(() => Supermecado, {through: {model: () => Through}})
  Stock: Supermecado[];

  @hasMany(() => Compra, {through: {model: () => Through}})
  listaCompras: Compra[];

  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
