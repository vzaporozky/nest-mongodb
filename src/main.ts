import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modul';

async function start() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();
