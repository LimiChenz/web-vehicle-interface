import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Response } from 'express';

@Controller('/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  getGoodsList(@Param() params: any) {
    return 'ok';
  }

  @Get(':goodsId')
  findOneGoods(@Param() params: any) {
    return 'ok';
  }

  @Post()
  createGoods(@Body() data: any) {
    return 'ok';
  }

  @Get()
  exportGoodsList(@Param() params: any) {
    return 'ok';
  }
}
