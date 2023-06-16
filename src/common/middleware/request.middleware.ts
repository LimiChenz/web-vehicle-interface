import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { GlobalLoggerService } from '../logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: GlobalLoggerService) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(
      `[${req.method}]:${req.originalUrl} [query:${JSON.stringify(
        req.query,
      )}] [body:${JSON.stringify(req.body)}]`,
    );
    next();
  }
}
