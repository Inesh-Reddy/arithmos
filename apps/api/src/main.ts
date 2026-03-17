import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prisma } from '@repo/db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(prisma.user);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
