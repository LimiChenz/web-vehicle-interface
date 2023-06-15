import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { IndexService } from './index.service';
import { Response } from 'express';
import { CreateIndexDto, GetIndexDto } from './dto/IndexDto';

@Controller('/index')
export class IndexController {
  constructor(private readonly appService: IndexService) {}

  @Get(':id')
  getHello(@Param() params: GetIndexDto, @Res() res: Response): void {
    console.log(this.appService.getHello(params.id));
    try {
      throw new HttpException(
        {
          errMsg: 'error request',
          data: [],
          status: 400,
        },
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      res.status(error.status).json(error.getResponse());
    }
  }

  @Post()
  postHello(@Body() data: CreateIndexDto, @Res() res: Response): void {
    res.send(JSON.stringify(data));
  }
}
