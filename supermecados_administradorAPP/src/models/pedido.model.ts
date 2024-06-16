import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Fornecedor} from './fornecedor.model';
import {Produto} from './produto.model';
import {Through} from './through.model';

@model()
export class Pedido extends Entity {
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
  dataPedido: string;

  @belongsTo(() => Fornecedor)
  fornecedorId: number;

  @hasMany(() => Produto, {through: {model: () => Through}})
  listaPedido: Produto[];

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
