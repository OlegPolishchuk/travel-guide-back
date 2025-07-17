import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ListResponseDto, PaginationDto } from '@/src/dto/pagination.dto';
import { CategoryDto } from '@/src/modules/category/dto/category.dto';

import { CategoryService } from './category.service';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'Get all categories',
    type: () => ListResponseDto<CategoryDto>,
  })
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.categoryService.findMany(paginationDto);
  }

  @ApiOperation({ summary: 'Get current Category' })
  @ApiResponse({
    status: 200,
    description: 'Get current Category',
  })
  @ApiResponse({ status: 404, description: 'Category not found' })
  @Get(':id')
  @Get()
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }
}
