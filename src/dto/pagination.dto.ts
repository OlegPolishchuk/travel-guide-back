import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export const DEFAULT_LIMIT = 10;

export class PaginationDto {
  @ApiProperty({ required: false, default: DEFAULT_LIMIT })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number = 10;

  @ApiProperty({ required: false, default: 1 })
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  page?: number = 1;

  @ApiProperty({ required: false })
  @IsOptional()
  sortBy?: string;

  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  @IsOptional()
  sortOrder?: 'asc' | 'desc';
}

export interface ListResponse<ItemsType> {
  total: number;
  limit: number;
  page: number;
  items: ItemsType[];
}
