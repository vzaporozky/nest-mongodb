import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ example: '1', description: 'Уникальный идентификатор' })
  id: number;
  @Prop({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  email: string;
  @Prop({ example: '12345678', description: 'Пароль' })
  password: string;

  @Prop({ example: 'true', description: 'Забанен или нет' })
  banned: boolean;

  @Prop({ example: 'За хулиганство', description: 'Причина блокировки' })
  banReason: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
  // owner: Owner[];

  // @BelongsToMany(() => Role, () => UserRoles)
  // roles: Role[];

  // @HasMany(() => Post)
  // posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
