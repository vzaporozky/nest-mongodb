import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const password = require('../password');

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://vzaporozky:${password}@mongo-test.1nbuq.mongodb.net/?retryWrites=true&w=majority&appName=mongo-test`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
