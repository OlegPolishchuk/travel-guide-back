import { Injectable } from '@nestjs/common';

import { CategoryService } from '@/src/modules/category/category.service';

@Injectable()
export class CategoriesService extends CategoryService {}
