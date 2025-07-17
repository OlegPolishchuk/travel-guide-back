import { BadRequestException, Injectable } from '@nestjs/common';

import { DEFAULT_LIMIT, PaginationDto } from '@/src/dto/pagination.dto';
import { DB_ERROR_MESSAGE } from '@/src/modules/admin/users/constants/error-messages';
import { PrismaService } from '@/src/modules/core/prisma/prisma.service';
import { UserDto } from '@/src/modules/user/dto/user.dto';
import { paginate } from '@/src/utils/paginate.utils';
import UserCreateInput = Prisma.UserCreateInput;
import UserUpdateInput = Prisma.UserUpdateInput;
import { Prisma } from '@prisma/client';

const USER_FIELDS_WITHOUT_PASS = {
  email: true,
  password: false,
  name: true,
  id: true,
  createdAt: true,
  avatar: true,
  role: true,
  updatedAt: true,
  routes: true,
  reviews: true,
  routeRatings: true,
};

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: UserCreateInput) {
    const existedUser = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existedUser) {
      throw new BadRequestException('User already exists');
    }

    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findOne(idOrEmail: string) {
    return this.prismaService.user.findFirst({
      where: {
        OR: [{ id: idOrEmail }, { email: idOrEmail }],
      },
    });
  }

  findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = DEFAULT_LIMIT, ...restParams } = paginationDto;

    return paginate<UserDto>(
      this.prismaService.user,
      {
        page,
        limit,
        ...restParams,
      },
      { select: USER_FIELDS_WITHOUT_PASS },
    );
  }

  async delete(id: string) {
    try {
      return await this.prismaService.user.delete({
        where: { id },
        select: USER_FIELDS_WITHOUT_PASS,
      });
    } catch (err) {
      throw new BadRequestException(DB_ERROR_MESSAGE[err.code]);
    }
  }

  update(userId: string, userData: UserUpdateInput) {
    return this.prismaService.user.update({
      where: { id: userId },
      data: userData,
      select: USER_FIELDS_WITHOUT_PASS,
    });
  }
}
