import { Module } from '@nestjs/common';

import { LocalStrategy } from '@/src/modules/auth/strategies/local.strategy';
import { UserService } from '@/src/modules/user/user.service';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Session } from './session';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, Session],
})
export class AuthModule {}
