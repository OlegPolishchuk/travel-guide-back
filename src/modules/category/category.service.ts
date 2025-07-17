import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/generated/prisma';

import { PrismaService } from '@/src/modules/core/prisma/prisma.service';
import CategoryCreateInput = Prisma.CategoryCreateInput;
import CategoryUpdateInput = Prisma.CategoryUpdateInput;
import { PaginationDto } from '@/src/dto/pagination.dto';
import { paginate } from '@/src/utils/paginate.utils';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  create(categoryCreateInput: CategoryCreateInput) {
    return this.prismaService.category.create({
      data: categoryCreateInput,
    });
  }

  update(id: number, categoryUpdateInput: CategoryUpdateInput) {
    return this.prismaService.category.update({
      where: { id },
      data: categoryUpdateInput,
    });
  }

  findMany(paginationDto: PaginationDto) {
    return paginate(this.prismaService.category, paginationDto);
  }

  findOne(id: number) {
    return this.prismaService.category.findUnique({
      where: { id },
    });
  }

  delete(id: number) {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
