import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { UserDto } from '@/src/modules/user/dto/user.dto';
import { UserService } from '@/src/modules/user/user.service';

@Injectable()
export class AdminUsersService extends UserService {
  async findCurrent(idOrEmail: string) {
    const user = await this.findOne(idOrEmail);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return plainToClass(UserDto, user);
  }

  deleteUser(idOrEmail: string) {
    return this.delete(idOrEmail);
  }
}
