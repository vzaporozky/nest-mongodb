import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './roles.scheme';
import { CreateRoleDto } from './dto/create-role.dto';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleModel.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({ where: { value } });
    return role;
  }
}
