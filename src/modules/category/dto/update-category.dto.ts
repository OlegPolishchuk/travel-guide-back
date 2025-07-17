import { PartialType } from '@nestjs/mapped-types';

import { CreateCategoryDto } from '@/src/modules/category/dto/create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
