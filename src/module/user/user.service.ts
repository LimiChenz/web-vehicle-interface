import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(id?: string): string {
    return 'Hello World!' + id;
  }
}
