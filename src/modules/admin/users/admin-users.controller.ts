import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Roles } from '@prisma/generated/prisma';

import { RolesDecorator } from '@/src/decorators/roles.decorator';
import { ListResponseDto, PaginationDto } from '@/src/dto/pagination.dto';
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
  @Delete(':idOrEmail')
  delete(@Param('idOrEmail') idOrEmail: string) {
    return this.usersService.deleteUser(idOrEmail);
  }
}
