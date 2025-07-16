import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();

    // Эта часть кода нужна только для создания в бд стартового админа
    // Проверяем существование админа
    const adminExists = await this.user.findUnique({
      where: {
        email: 'admin@mail.com',
      },
    });

    if (adminExists) {
      console.warn('Admin уже существует');
    }

    // Если админ не существует, создаем его
    if (!adminExists) {
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
  }
}
