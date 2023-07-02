import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Response } from 'express';
import { GetGoodsDto } from './dto/goodsDto';

@Controller('/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  async getGoodsList(@Param() params: any) {
    const data = await this.goodsService.getCoodsList();
    return data;
  }

  @Get(':goods_id')
  async findOneGoods(@Param() params: GetGoodsDto) {
    const id = Number(params.goods_id);
    const data = await this.goodsService.getGoodsByOne(id);
    return data;
  }

  @Post()
  async createGoods(@Body() data: any) {
    const result = await this.goodsService.createGoods(data);
    return result;
  }

  @Delete(':goods_id')
  async deleteGoods(@Param() params: GetGoodsDto) {
    const id = Number(params.goods_id);
    const result = await this.goodsService.deleteGoods(id);
    return result;
  }

  @Get()
  exportGoodsList(@Param() params: any) {
    return 'ok';
  }
}
