import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: ["https://127.0.0.1:3000"] })
  await app.listen(PORT, () => console.log(`NEST APP STARTED ON ${PORT} PORT`));
}

bootstrap();
