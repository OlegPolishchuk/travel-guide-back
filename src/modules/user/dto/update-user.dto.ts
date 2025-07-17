import { PickType } from '@nestjs/mapped-types';
import { PickType as PickTypeSwagger } from '@nestjs/swagger';

import { UserDto } from '@/src/modules/user/dto/user.dto';

export class UpdateUserDto extends PickType(UserDto, [
  'name',
  'avatar',
  'role',
] as const) {}

export class UpdateUserDtoSwagger extends PickTypeSwagger(UserDto, [
  'name',
  'avatar',
  'role',
] as const) {}
