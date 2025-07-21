import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { ListResponseDto } from '@/src/dto/pagination.dto';
import { AttractionDTO } from '@/src/modules/attraction/dto/attraction.dto';

import { AttractionService } from './attraction.service';

@Controller('attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @ApiOperation({ summary: 'Get all attractions' })
  @ApiResponse({
    status: 200,
    description: 'Get all attractions',
    type: () => ListResponseDto<AttractionDTO>,
  })
  @ApiResponse({ status: 404, description: 'Attractions not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  findAll() {
    return this.attractionService.findAll();
  }
}
