import { Module } from '@nestjs/common';

import { UserService } from '@/src/modules/user/user.service';

import { AdminUsersModule } from './users/admin-users.module';

@Module({
  controllers: [],
  providers: [UserService],
  imports: [AdminUsersModule],
})
export class AdminModule {}
