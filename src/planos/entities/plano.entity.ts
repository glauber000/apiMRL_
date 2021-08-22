import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanoDocument = Plano & Document;

@Schema()
export class Plano {
 
  @Prop({required: true})
  descricao: string;

  @Prop({required: true})
  valor: number;
}

export const PlanoSchema = SchemaFactory.createForClass(Plano);