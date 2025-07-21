import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedisStore } from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { createClient } from 'redis';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const redisUrl = `redis://${config.get('REDIS_USER')}:${config.get('REDIS_PASSWORD')}@${config.get('REDIS_HOST')}:${config.get('REDIS_PORT')}`;
  const redisClient = createClient({
    url: redisUrl,
  });
  redisClient.connect().catch(console.error);

  const redisStore = new RedisStore({
    client: redisClient,
    prefix: 'travel-guide:',
  });

  app.setGlobalPrefix('api');

  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  app.use(
    session({
      secret: config.getOrThrow<string>('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: config.get('NODE_ENV') === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24, // 24 часа ы
      },
      store: redisStore,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const openApiConfig = new DocumentBuilder()
    .setTitle('Travel-Guide api')
    .setDescription('Travel-Guide api')
    .setVersion('1.0')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('docs', app, documentFactory);

  // Запуск приложения
  const port = config.get<number>('APPLICATION_PORT') || 4000;
  await app.listen(port);
  console.log(`Приложение запущено на порту ${port}`);
}

bootstrap().catch((err) => console.error(err));
