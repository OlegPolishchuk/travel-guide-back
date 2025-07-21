import { ApiProperty } from '@nestjs/swagger';

export class AttractionDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  categoryId: number;
  @ApiProperty()
  locationId: number;
  @ApiProperty()
  tags: string[];
  @ApiProperty()
  operatingHours: (number | string)[];
  @ApiProperty()
  routes: any[];
  @ApiProperty()
  averageRating?: number;
  @ApiProperty()
  visitDuration?: number;
  @ApiProperty()
  entryFee?: number;
  @ApiProperty()
  website?: string;
  @ApiProperty()
  phone?: string;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}
