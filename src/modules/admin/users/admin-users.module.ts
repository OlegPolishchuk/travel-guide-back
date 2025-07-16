import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { RolesGuard } from '@/src/guards/roles.guard';

import { AdminUsersController } from './admin-users.controller';
import { AdminUsersService } from './admin-users.service';

@Module({
  controllers: [AdminUsersController],
  providers: [AdminUsersService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AdminUsersModule {}
