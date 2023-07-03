import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GlobalLoggerService } from 'src/common/logger/logger.service';
import { User } from './entities/user.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: GlobalLoggerService,
    @InjectRepository(User)
    private readonly catRepository: Repository<User>,
  ) {}

  async getUserList(query: { page: number; page_size: number }) {
    const list = await this.catRepository.find({
      skip: query.page,
      take: query.page_size,
      where: {
        is_delete: Not(1),
      },
    });
    return {
      list,
      pagination: {
        page: Number(query.page),
        page_size: Number(query.page_size),
        total: await this.catRepository.count(),
      },
    };
  }

  async getOneUser(id: number) {
    return await this.catRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(data: any) {
    const newData = await this.catRepository.create(data);
    const result = await this.catRepository.save(newData);
    return result;
  }

  async deleteUser(id: number) {
    return await this.catRepository.update(id, {
      is_delete: 1,
    });
  }
}
