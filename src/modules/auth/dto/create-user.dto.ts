import { PickType } from '@nestjs/mapped-types';
import { PickType as PickTypeSwagger } from '@nestjs/swagger';

import { UserDto } from '@/src/modules/user/dto/user.dto';

export class CreateUserDto extends PickType(UserDto, ['email', 'password']) {}
export class CreateUserDtoSwagger extends PickTypeSwagger(UserDto, [
  'email',
  'password',
]) {}
