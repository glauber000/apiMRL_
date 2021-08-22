import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Plano } from 'src/planos/entities/plano.entity';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop()
  nome: string;

  @Prop({required: true, type: Object})
  endereco: Object;

  @Prop({required: true})
  cel: string;

  @Prop()
  cpf: string;
  
  @Prop({required: true})
  planos: Plano[];
  
  @Prop()
  pppoe: string;

  @Prop({required: true , default: 5})
  vencimento: number;

  @Prop()
  tp_conec: string;

  @Prop()
  obs: string;

  @Prop()
  nm_fantasia: string;
  
  @Prop()
  rz_social: string;
  
  @Prop()
  ps_contato: string;

  @Prop({required: true})
  email: string;

  @Prop()
  cnpj: string;

  @Prop()
  db: string;

  @Prop({default: 'PF'})
  tp_cliente: string;
}
















export const ClienteSchema = SchemaFactory.createForClass(Cliente);