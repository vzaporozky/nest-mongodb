import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './Cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesController } from './roles/roles.controller';
import { RolesModule } from './roles/roles.module';

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
    // OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
