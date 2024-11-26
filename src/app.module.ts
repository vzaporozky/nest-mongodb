import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './Cat/cat.modul';
import { ConfigModule } from '@nestjs/config';

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
    // OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
