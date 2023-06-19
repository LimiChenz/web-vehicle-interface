import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Response } from 'express';

@Controller('/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  getGoodsList(@Param() params: any, @Res() res: Response): void {
    res.send('ok');
  }

  @Get(':goodsId')
  findOneGoods(@Param() params: any, @Res() res: Response): void {
    res.send('ok');
  }

  @Post()
  createGoods(@Body() data: any, @Res() res: Response): void {
    res.send('ok');
  }

  @Get()
  exportGoodsList(@Param() params: any, @Res() res: Response): void {
    res.send('ok');
  }
}
