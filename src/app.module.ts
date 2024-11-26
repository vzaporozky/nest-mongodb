import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { CatsModule } from './Cat/cat.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

const password = require('../password');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://vzaporozky:${process.env.PASSWORD || password}@cluster0.1nbuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),

    CatsModule,
    UsersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
