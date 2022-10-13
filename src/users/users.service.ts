import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserDto } from '../dto/user.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User, private rolesService: RolesService) {}

  async createUser(userDto: UserDto) {
    const user = await this.usersRepository.create(userDto);
    const role = await this.rolesService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    return user;
  }

  async getAllUsers() {
    return await this.usersRepository.findAll({ include: { all: true } });
  }
}
