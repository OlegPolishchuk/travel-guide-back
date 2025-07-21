import { ListResponse, PaginationDto } from '@/src/dto/pagination.dto';

export async function paginate<T>(
  prismaModel: any,
  paginationDto: PaginationDto,
  options: {
    where?: any;
    select?: any;
    include?: any;
    orderBy?: any;
  } = {},
): Promise<ListResponse<T>> {
  const { limit = 10, page = 1 } = paginationDto;

  // If both page and limit are null, fetch all records
  if (page === null && limit === null) {
    const items = await prismaModel.findMany({
      where: options.where,
      select: options.select,
      include: options.include,
      orderBy: options.orderBy,
    });

    return {
      total: items.length,
      limit: items.length,
      page: 1,
      items,
    };
  }

  // Apply pagination if page or limit is provided
  const skip = (page! - 1) * limit!;

  const [items, total] = await Promise.all([
    prismaModel.findMany({
      take: limit,
      skip,
      where: options.where,
      select: options.select,
      include: options.include,
      orderBy: options.orderBy,
    }),
    prismaModel.count({
      where: options.where,
    }),
  ]);

  return {
    total,
    limit: limit!,
    page: page!,
    items,
  };
}
