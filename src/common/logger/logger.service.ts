import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install();
@Injectable()
export class GlobalLoggerService implements LoggerService {
  private readonly logger;

  constructor() {
    const logFormat = format.printf(({ level, message, timestamp, stack }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}\n ${
        stack || ''
      }`;
    });

    this.logger = createLogger({
      transports: [
        new transports.Console(),
        new transports.DailyRotateFile({
          dirname: 'logs/info',
          filename: '/application-%DATE%.log',
          level: 'info',
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '14d',
          format: format.combine(
            format.timestamp(),
            format.errors({ stack: true }),
            logFormat,
          ),
        }),
        new transports.DailyRotateFile({
          dirname: 'logs/error',
          filename: '/application-%DATE%.log',
          level: 'error',
          datePattern: 'YYYY-MM-DD',
          maxSize: '20m',
          maxFiles: '14d',
          format: format.combine(format.timestamp(), logFormat),
        }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  error(message: string, trace: any) {
    this.logger.error(message, trace);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}
