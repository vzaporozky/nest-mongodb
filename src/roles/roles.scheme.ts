import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/users.schema';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Prop()
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Unique role value ' })
  @Prop()
  value: string;

  @ApiProperty({ example: 'admin', description: 'Role description' })
  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
