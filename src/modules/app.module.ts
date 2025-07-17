import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { RedisModule } from './core/redis/redis.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AttractionModule } from './attraction/attraction.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ session: true }),
    RedisModule,
    PrismaModule,
    AuthModule,
    UserModule,
    AdminModule,
    AttractionModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
