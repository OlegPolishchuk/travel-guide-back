import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.group('Local Guard');

    const result: boolean = (await super.canActivate(context)) as boolean;
    await super.logIn(context.switchToHttp().getRequest());

    console.log('result =>', result);
    console.groupEnd();

    return result;
  }
}
