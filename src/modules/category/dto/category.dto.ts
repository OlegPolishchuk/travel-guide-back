import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CategoryDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Historical Landmarks' })
  name: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({ example: '2024-01-02T00:00:00.000Z' })
  @Type(() => Date)
  updatedAt: Date;

  // Если тебе нужно возвращать связанные attraction'ы — раскомментируй:
  // @ApiProperty({ type: () => [AttractionDto] })
  // attractions: AttractionDto[];
}
