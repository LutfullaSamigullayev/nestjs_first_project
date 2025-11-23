import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalServerErrorException } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000, () => {
      console.log("server ishladi...")
    });
  } catch(error) {
    throw new InternalServerErrorException(error.message)
  }
}
bootstrap();
