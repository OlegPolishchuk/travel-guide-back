import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class Session extends PassportSerializer {
  serializeUser(user: any, done: (err: any, user: any) => void): void {
    done(null, user);
  }

  deserializeUser(
    payload: string,
    done: (err: any, payload: string) => void, // <-- здесь
  ): void {
    done(null, payload);
  }
}
