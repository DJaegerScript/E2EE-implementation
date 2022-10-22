import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CipheringInterceptor } from './ciphering.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalInterceptors(new CipheringInterceptor());
  await app.listen(3001);
}
bootstrap();
