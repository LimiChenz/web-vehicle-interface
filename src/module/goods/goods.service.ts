import { GlobalLoggerService } from 'src/common/logger/logger.service';
import { getConnection } from 'typeorm';
import { Goods } from './entitys/goods.entity';

export class GoodsService {
  constructor(private readonly logger: GlobalLoggerService) {}

  getGoodsList = async () => {
    return await getConnection().getRepository(Goods).find();
  };
}
