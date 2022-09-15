import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return 'Auth login';
  }

  logout(): string {
    return 'Auth logout';
  }
}
