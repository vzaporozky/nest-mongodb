import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @ApiProperty({ example: 'Murzik', description: 'Cat name' })
  @Prop()
  name: string;

  @ApiProperty({ example: '5', description: 'Cat age' })
  @Prop()
  age: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
