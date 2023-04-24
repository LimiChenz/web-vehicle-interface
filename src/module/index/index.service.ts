import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  getHello(id?: string): string {
    return 'Hello World!' + id;
  }
}
