import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsModule } from './Cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

const password = require('../password');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://vzaporozky:${password}@mongo-test.1nbuq.mongodb.net/?retryWrites=true&w=majority&appName=mongo-test`,
    ),
    CatsModule,
    UsersModule,
    // OwnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
