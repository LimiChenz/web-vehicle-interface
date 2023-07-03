import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { Response, query } from 'express';
import { GetGoodsDto } from './dto/goodsDto';

@Controller('/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  async getGoodsList(@Query() query: { page: number; page_size: number }) {
    const data = await this.goodsService.getGoodsList(query);
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

  @Put()
  async updateGoods(@Body() data: any) {
    const result = await this.goodsService.updateGoods(data);
    return result;
  }

  @Get()
  exportGoodsList(@Param() params: any) {
    return 'ok';
  }
}
