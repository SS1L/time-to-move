import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  create(): string {
    return 'Account create';
  }

  update(): string {
    return 'Account update';
  }

  delete(): string {
    return 'Account delete';
  }
}
