import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/generated/prisma';

import { DEFAULT_LIMIT, PaginationDto } from '@/src/dto/pagination.dto';
import { PrismaService } from '@/src/modules/core/prisma/prisma.service';
import { UserDto } from '@/src/modules/user/dto/user.dto';
import { paginate } from '@/src/utils/paginate.utils';
import UserCreateInput = Prisma.UserCreateInput;

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

  delete(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
