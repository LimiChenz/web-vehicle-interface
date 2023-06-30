import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { IndexService } from './index.service';
import { Response } from 'express';
import { CreateIndexDto, GetIndexDto } from './dto/IndexDto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@Controller('/index')
export class IndexController {
  constructor(private readonly appService: IndexService) {}

  @Get(':id')
  getHello(@Param() params: GetIndexDto) {
    return this.appService.getHello(params.id);
  }

  @Post()
  postHello(@Body() data: CreateIndexDto): string {
    return JSON.stringify(data);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {}))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File | Array<Express.Multer.File>,
    @Res() res: Response,
    @Body() body: any,
  ) {
    const processFile = (file) => {
      const _path = join(
        __dirname,
        '../../../uploads',
        `${Math.round(Math.random() * 1e9)}-${file.originalname}`,
      );

      try {
        const writeStream = createWriteStream(_path);
        writeStream.write(file.buffer);

        return { code: 200, msg: '文件上传成功', path: _path };
      } catch (error) {
        return { code: 500, msg: '上传文件错误' };
      }
    };
    if (Array.isArray(file)) {
      file.forEach((_file) => {
        processFile(_file);
      });
    } else {
      processFile(file);
    }
  }
}
