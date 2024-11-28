import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { Post } from 'src/posts/posts.schema';
import { Role } from 'src/roles/roles.scheme';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Prop()
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'Post address' })
  @Prop()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @Prop()
  password: string;

  @ApiProperty({ example: 'true', description: 'Ban or not' })
  @Prop()
  banned: boolean;

  @ApiProperty({ example: 'because of spam', description: 'Reason for ban' })
  @Prop()
  banReason: string;

  @ApiProperty({ example: 'User`s role', description: 'What role user have' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }] })
  roles: Role[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
