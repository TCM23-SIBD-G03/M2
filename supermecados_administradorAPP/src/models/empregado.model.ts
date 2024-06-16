import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Supermecado} from './supermecado.model';

@model()
export class Empregado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  nome?: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  dataNascimento: string;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'number',
  })
  telemovel?: number;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;

  @property({
    type: 'number',
    required: true,
  })
  salario: number;

  @belongsTo(() => Supermecado)
  supermecadoId: number;

  constructor(data?: Partial<Empregado>) {
    super(data);
  }
}

export interface EmpregadoRelations {
  // describe navigational properties here
}

export type EmpregadoWithRelations = Empregado & EmpregadoRelations;
