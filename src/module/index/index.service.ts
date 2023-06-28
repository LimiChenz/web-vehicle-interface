import { Injectable, Logger } from '@nestjs/common';
import { GlobalLoggerService } from 'src/common/logger/logger.service';

@Injectable()
export class IndexService {
  constructor(private readonly logger: GlobalLoggerService) {}
  getHello(id?: string): string {
    if (id === '100') {
      try {
        throw new Error('这是一个错误');
      } catch (error) {
        this.logger.error('getHello error' + id, error);
      }
    }
    return 'Hello World!' + id;
  }
}
