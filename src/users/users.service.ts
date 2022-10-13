import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User) {}

  async createUser(userDto: CreateUserDto) {
    return await this.usersRepository.create(userDto);
  }

  async getAllUsers() {
    return await this.usersRepository.findAll();
  }
}
