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

  deleteUser(id: string) {
    return this.delete(id);
  }

  createUser(email: string) {
    const pass = this._generatePassword();

    return this.create({ email, password: pass });
  }

  private _generatePassword() {
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    const length = Math.floor(Math.random() * chars.length);

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    return password;
  }
}
