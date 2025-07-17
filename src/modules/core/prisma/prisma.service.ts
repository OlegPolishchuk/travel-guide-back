import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/generated/prisma';
import * as bcrypt from 'bcrypt';

import * as attractionsData from '../../../../mock-data/attractions_data.json';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();

    // Проверка и создание админа
    const adminExists = await this.user.findUnique({
      where: {
        email: 'admin@mail.com',
      },
    });

    if (adminExists) {
      console.warn('Admin уже существует');
    } else {
      const hashedPassword = await bcrypt.hash('123', 10);
      await this.user.create({
        data: {
          email: 'admin@mail.com',
          password: hashedPassword,
          name: 'admin',
          role: 'SUPERUSER',
        },
      });
      console.warn('Admin с полем email: admin@mail.com создан');
    }

    // Проверка категорий
    const categories = await this.category.count();
    console.log('categories =>', categories);

    if (categories > 0) {
      console.warn('Категории уже существуют в базе данных');
    } else {
      await this.category.createMany({
        data: [
          { name: 'Природные достопримечательности' },
          { name: 'Культурно-исторические' },
          { name: 'Развлекательные парки' },
          { name: 'Гастрономия' },
          { name: 'Пляжные курорты' },
          { name: 'Горнолыжные курорты' },
          { name: 'Религиозные места' },
          { name: 'Городской туризм' },
          { name: 'Экстремальный туризм' },
          { name: 'Экотуризм и агротуризм' },
        ],
      });
      console.log('Категории вставлены вручную');
    }

    // Проверка и вставка достопримечательностей
    const attractionsCount = await this.attraction.count();
    console.log('attractionsCount =>', attractionsCount);

    if (attractionsCount > 0) {
      console.warn('Достопримечательности уже существуют в базе данных');
      return;
    }

    for (const item of attractionsData) {
      const location = await this.location.create({
        data: {
          city: item.location.city,
          country: item.location.country,
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          address: item.location.address,
          createdAt: new Date(item.location.createdAt),
          updatedAt: new Date(item.location.updatedAt),
        },
      });

      await this.attraction.create({
        data: {
          name: item.attraction.name,
          description: item.attraction.description,
          categoryId: item.attraction.categoryId,
          locationId: location.id,
          averageRating: item.attraction.averageRating,
          visitDuration: item.attraction.visitDuration,
          entryFee: item.attraction.entryFee,
          website: item.attraction.website,
          phone: item.attraction.phone,
          createdAt: new Date(item.attraction.createdAt),
          updatedAt: new Date(item.attraction.updatedAt),
          // media: [],
          // reviews: [],
          // tags: [],
          // operatingHours: [],
          // routes: [],
        },
      });
    }

    console.warn('Достопримечательности успешно добавлены в базу данных');
  }
}
