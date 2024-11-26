import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Unique role value ' })
  value: string;

  @ApiProperty({ example: 'admin', description: 'Role description' })
  description: string;

  // @BelongsToMany(() => User, () => UserRoles)
  // users: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
