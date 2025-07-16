import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '@prisma/generated/prisma';
import { Exclude } from 'class-transformer';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  role: Roles;

  @ApiProperty()
  name?: string | null;

  @ApiProperty()
  avatar?: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
