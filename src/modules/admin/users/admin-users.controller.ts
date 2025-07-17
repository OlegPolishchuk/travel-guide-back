import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from '@prisma/generated/prisma';

import { RolesDecorator } from '@/src/decorators/roles.decorator';
import { ListResponseDto, PaginationDto } from '@/src/dto/pagination.dto';
import {
  UpdateUserDto,
  UpdateUserDtoSwagger,
} from '@/src/modules/user/dto/update-user.dto';
import { UserDto } from '@/src/modules/user/dto/user.dto';

import { AdminUsersService } from './admin-users.service';

@RolesDecorator(Roles.ADMIN, Roles.SUPERUSER)
@Controller('admin/users')
export class AdminUsersController {
  constructor(private readonly usersService: AdminUsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Get all users',
    type: () => ListResponseDto<UserDto>,
  })
  @ApiResponse({ status: 404, description: 'Users not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }

  @ApiOperation({ summary: 'Get current User' })
  @ApiResponse({
    status: 200,
    description: 'Get current User',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get(':idOrEmail')
  findOne(@Param('idOrEmail') idOrEmail: string) {
    return this.usersService.findCurrent(idOrEmail);
  }

  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({
    status: 200,
    description: 'Delete User by id/email',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: 'Create new User' })
  @ApiBody({
    type: String,
    examples: {
      default: {
        summary: 'Examples',
        value: {
          email: 'test@mail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Create new User',
    type: UserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @HttpCode(201)
  @Post()
  create(@Body('email') email: string) {
    return this.usersService.createUser(email);
  }

  @ApiOperation({ summary: 'Update User' })
  @ApiBody({
    type: UpdateUserDtoSwagger,
  })
  @ApiResponse({
    status: 200,
    description: 'Update User',
    type: UserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @HttpCode(201)
  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    console.log('updateUserDto =>', updateUserDto);
    console.log('userId: =>', id);

    return this.usersService.update(id, updateUserDto);
  }
}
