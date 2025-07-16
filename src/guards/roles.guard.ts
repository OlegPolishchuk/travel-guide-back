import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '@prisma/generated/prisma';

import { ROLES_KEY } from '@/src/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.group('Roles Guard');

    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('requiredRoles =>', requiredRoles);

    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    console.log('current user role =>', user);

    if (!user) {
      throw new UnauthorizedException();
    }

    console.groupEnd();
    /* То есть если роль из декоратора @Role(значение роли) равно роли в объекте user, пропускаем */
    return requiredRoles.includes(user.role);
  }
}
