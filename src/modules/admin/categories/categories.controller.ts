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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ListResponseDto, PaginationDto } from '@/src/dto/pagination.dto';
import { CreateUserDtoSwagger } from '@/src/modules/auth/dto/create-user.dto';
import { CategoryDto } from '@/src/modules/category/dto/category.dto';
import { CreateCategoryDto } from '@/src/modules/category/dto/create-category.dto';
import { UpdateCategoryDto } from '@/src/modules/category/dto/update-category.dto';

import { CategoriesService } from './categories.service';

@ApiTags('Admin categories')
@Controller('admin/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'Get all categories',
    type: () => ListResponseDto<CategoryDto>,
  })
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.categoriesService.findMany(paginationDto);
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
    return this.categoriesService.findOne(id);
  }

  @ApiOperation({ summary: 'Create new Category' })
  @ApiBody({
    type: CreateUserDtoSwagger,
    examples: {
      default: {
        summary: 'Examples',
        value: {
          name: 'Горы',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Create new Category',
    type: CategoryDto,
  })
  @HttpCode(201)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Update Category' })
  @ApiBody({
    type: CreateUserDtoSwagger,
    examples: {
      default: {
        summary: 'Examples',
        value: {
          name: 'Новое название',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Update Category',
    type: CategoryDto,
  })
  @HttpCode(200)
  @Put(':id')
  update(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id') id: number,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete Category' })
  @ApiResponse({
    status: 200,
    description: 'Category deleted',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoriesService.delete(id);
  }
}
