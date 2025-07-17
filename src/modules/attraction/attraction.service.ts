import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/generated/prisma';

import { PaginationDto } from '@/src/dto/pagination.dto';
import { PrismaService } from '@/src/modules/core/prisma/prisma.service';
import { paginate } from '@/src/utils/paginate.utils';
import AttractionUpdateInput = Prisma.AttractionUpdateInput;
import AttractionCreateInput = Prisma.AttractionCreateInput;

@Injectable()
export class AttractionService {
  constructor(private prismaService: PrismaService) {}

  findAll(paginationDto: PaginationDto) {
    return paginate(this.prismaService.attraction, paginationDto);
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
