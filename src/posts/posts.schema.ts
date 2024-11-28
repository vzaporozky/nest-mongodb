import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/users.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Prop()
  id: number;

  @ApiProperty({ example: 'title', description: 'title of post' })
  @Prop()
  title: string;

  @ApiProperty({ example: 'content', description: 'text of post' })
  @Prop()
  content: string;

  @ApiProperty({ example: 'image.jpg', description: 'image file' })
  @Prop()
  image: string;

  @ApiProperty({ example: 'User`s role', description: 'author of post' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  author: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
