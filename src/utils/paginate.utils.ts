import { ListResponse, PaginationDto } from '@/src/dto/pagination.dto';

export async function paginate<T>(
  prismaModel: any, // Модель Prisma, например, prismaService.user
  paginationDto: PaginationDto,
  options: {
    where?: any; // Условия фильтрации
    select?: any; // Поля для выборки
    include?: any; // Связанные данные
    orderBy?: any; // Сортировка
  } = {},
): Promise<ListResponse<T>> {
  const { limit = 10, page = 1 } = paginationDto;
  const skip = (page - 1) * limit;

  // Параллельно получаем данные и общее количество
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
    limit,
    page,
    items,
  };
}
