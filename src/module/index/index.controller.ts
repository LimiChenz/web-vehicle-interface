import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
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

@Controller('/index')
export class IndexController {
  constructor(private readonly appService: IndexService) {}

  @Get(':id')
  getHello(@Param() params: GetIndexDto, @Res() res: Response): void {
    let _result = this.appService.getHello(params.id);
    // try {
    //   throw new HttpException(
    //     {
    //       errMsg: 'error request',
    //       data: [],
    //       status: 400,
    //     },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // } catch (error) {
    //   res.status(error.status).json(error.getResponse());
    // }
    res.send(_result);
  }

  @Post()
  postHello(@Body() data: CreateIndexDto, @Res() res: Response): void {
    res.send(JSON.stringify(data));
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, callback) => {
      //     const uniqueSuffix =
      //       Date.now() + '-' + Math.round(Math.random() * 1e9);
      //     callback(null, file.originalname + '-' + uniqueSuffix);
      //   },
      // }),
    }),
  )
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

        res.send({ code: 200, msg: '文件上传成功', path: _path });
      } catch (error) {
        res.send({ code: 500, msg: '上传文件错误' });
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
