import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import * as crypto from 'crypto-js';
import { Properties } from './interface';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getUserList(@Query() query: { page: number; page_size: number }) {
    const data = await this.appService.getUserList(query);
    return data;
  }

  @Get(':id')
  async findOneUser(@Param() params: { id: string }) {
    const id = Number(params.id);
    const data = await this.appService.getOneUser(id);
    return data;
  }

  @Post()
  async createUser(@Body() data: Exclude<Properties<User>, 'id'>) {
    const values = data;
    const hash = crypto.MD5(values.password).toString();
    values.password = hash;
    const result = await this.appService.createUser(values);
    return result;
  }

  @Delete(':id')
  async deleteUser(@Param() params: { id: string }) {
    const id = Number(params.id);
    const result = await this.appService.deleteUser(id);
    return result;
  }
}
