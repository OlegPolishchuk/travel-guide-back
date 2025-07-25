import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';

import {
  CreateUserDto,
  CreateUserDtoSwagger,
} from '@/src/modules/auth/dto/create-user.dto';
import { LocalGuard } from '@/src/modules/auth/guards/local.guard';
import { UserDto } from '@/src/modules/user/dto/user.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register new User' })
  @ApiBody({
    type: CreateUserDtoSwagger,
    examples: {
      default: {
        summary: 'Examples',
        value: {
          email: 'test@mail.com',
          password: '123',
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
  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return this.authService.register(createUserDto);
  }

  @ApiOperation({ summary: 'Login User' })
  @ApiBody({
    type: CreateUserDto,
    examples: {
      default: {
        summary: 'Examples',
        value: {
          email: 'test@mail.com',
          password: '123',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login User',
    type: UserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @UseGuards(LocalGuard)
  @HttpCode(200)
  @Post('login')
  async login(
    @Body() createUserDto: CreateUserDto,
    @Session() session: Session,
  ): Promise<UserDto> {
    const user = await this.authService.login(createUserDto);

    console.group('LOGIN Controller');
    console.log('USER =>', user);
    console.groupEnd();
    session.user_id = user.id;

    return user;
  }

  @ApiOperation({ summary: 'Get Me' })
  @ApiResponse({
    status: 200,
    description: 'Get Me data',
    type: UserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get('me')
  getMe(@Session() session: Session) {
    console.group('ME Controller');
    console.log('session =>', session);
    console.groupEnd();

    return this.authService.getUser(session.user_id);
  }

  @ApiOperation({ summary: 'Logout User' })
  @ApiResponse({
    status: 200,
    description: 'Logout successful',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  // @UseGuards(LocalGuard)
  @HttpCode(200)
  @Get('logout')
  logout(@Req() request: Request) {
    return this.authService.logout(request);
  }
}
