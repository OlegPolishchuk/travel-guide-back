import { Module } from '@nestjs/common';

import { UserService } from '@/src/modules/user/user.service';

import { AdminUsersModule } from './users/admin-users.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  controllers: [],
  providers: [UserService],
  imports: [AdminUsersModule, CategoriesModule],
})
export class AdminModule {}
