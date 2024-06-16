import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Supermecado} from './supermecado.model';
import {Fornecedor} from './fornecedor.model';

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

  @belongsTo(() => Supermecado, {name: 'pedidosRealizados'})
  supermecadoId: number;

  @belongsTo(() => Fornecedor, {name: 'PedidosEnviados'})
  fornecedorId: number;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
