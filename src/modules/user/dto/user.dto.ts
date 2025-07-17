import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @MinLength(3)
  password: string;

  @ApiProperty({ enum: Roles, enumName: 'Roles' })
  @IsEnum(Roles, { message: 'role must be a valid Roles enum value' })
  role: Roles;

  @ApiProperty({ type: String, nullable: true, required: false })
  @IsOptional()
  name?: string | null;

  @ApiProperty({ type: String, nullable: true, required: false })
  @IsOptional()
  avatar?: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
