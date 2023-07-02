import { InjectRepository } from '@nestjs/typeorm';
import { GlobalLoggerService } from 'src/common/logger/logger.service';
import { getConnection, Repository } from 'typeorm';
import { Goods } from './entitys/goods.entity';

export class GoodsService {
  constructor(
    private readonly logger: GlobalLoggerService,
    @InjectRepository(Goods)
    private readonly catRepository: Repository<Goods>,
  ) {}

  getCoodsList = async () => {
    return await this.catRepository.find();
  };

  getGoodsByOne = async (id: number) => {
    return await this.catRepository.findOneBy({
      id,
    });
  };

  createGoods = async (goodsData: any) => {
    const newData = await this.catRepository.create(goodsData);
    return await this.catRepository.save(newData);
  };

  deleteGoods = async (id: number) => {
    return await this.catRepository.delete({
      id,
    });
  };

  updateGoods = async (goodsData: any) => {
    return await this.catRepository.update(
      {
        id: goodsData.id,
      },
      goodsData,
    );
  };
}
