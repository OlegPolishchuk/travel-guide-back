import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';

import { CreateUserDto } from '@/src/modules/auth/dto/create-user.dto';
import { UserDto } from '@/src/modules/user/dto/user.dto';
import { UserService } from '@/src/modules/user/user.service';

@Injectable()
export class AuthService {
  _salt: string;

  constructor(private userService: UserService) {
    this._salt = bcrypt.genSaltSync();
  }

  async register(createUserDto: CreateUserDto) {
    const { password, email } = createUserDto;

    const hashedPassword = await this.hashPassword(password);

    const user = await this.userService.create({
      email,
      password: hashedPassword,
    });

    return plainToClass(UserDto, user);
  }

  async validateUser(createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.userService.findOne(createUserDto.email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatchPassword = await this.isMatchPassword(
      createUserDto.password,
      user.password,
    );

    if (!isMatchPassword) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async login(createUserDto: CreateUserDto) {
    const user = await this.validateUser(createUserDto);

    return plainToClass(UserDto, user);
  }

  async getUser(idOrEmail: string) {
    const user = await this.userService.findOne(idOrEmail);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return plainToClass(UserDto, user);
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  private async isMatchPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
