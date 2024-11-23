import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cat } from '../Cat/cat.schema';

export type CatDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' })
  cat: Cat;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
