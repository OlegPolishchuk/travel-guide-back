import { Injectable } from '@nestjs/common';

import { PaginationDto } from '@/src/dto/pagination.dto';
import { PrismaService } from '@/src/modules/core/prisma/prisma.service';
import { paginate } from '@/src/utils/paginate.utils';
import AttractionUpdateInput = Prisma.AttractionUpdateInput;
import AttractionCreateInput = Prisma.AttractionCreateInput;
import { Prisma } from '@prisma/client';

@Injectable()
export class AttractionService {
  constructor(private prismaService: PrismaService) {}

  // findAll(paginationDto: PaginationDto) {
  //   return paginate(this.prismaService.attraction, paginationDto);
  // }

  findAll() {
    return paginate(this.prismaService.attraction, { limit: null, page: null });
  }

  findOne(id: number) {
    return this.prismaService.attraction.findUnique({
      where: { id },
    });
  }

  update(id: number, attractionUpdateInput: AttractionUpdateInput) {
    return this.prismaService.attraction.update({
      where: { id },
      data: attractionUpdateInput,
    });
  }

  create(attractionCreateInput: AttractionCreateInput) {
    return this.prismaService.attraction.create({
      data: attractionCreateInput,
    });
  }

  delete(id: number) {
    return this.prismaService.attraction.delete({
      where: { id },
    });
  }
}
