import { IsNotEmpty } from 'class-validator';

export class GetGoodsDto {
  @IsNotEmpty()
  goods_id: string;
}
