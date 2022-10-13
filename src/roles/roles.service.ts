import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { RoleDto } from '../dto/role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

  async createRole(roleDto: RoleDto) {
    return await this.rolesRepository.create(roleDto);
  }

  async getRoleByValue(value: string) {
    return await this.rolesRepository.findOne({ where: { value } });
  }
}
