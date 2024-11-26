import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  // constructor(@InjectModel(User) private userModel: typeof User,
  // private roleService: RolesService) {}

  // async createUser(userDto: CreateUserDto) {
  //   const user = await this.userModel.create(userDto);
  //   const role = await this.roleService.getRoleByValue('ADMIN');
  //   await user.$set('roles', [role.id]);
  //   user.roles = [role];
  //   return user;
  // }

  // async addRole(dto: AddRoleDto) {
  //   const user = await this.userRepository.findByPk(dto.userId);
  //   const role = await this.roleService.getRoleByValue(dto.value);
  //   if (role && user) {
  //     await user.$add('role', role.id);
  //     return dto;
  //   }
  //   throw new HttpException(
  //     'Пользователь или роль не найдены',
  //     HttpStatus.NOT_FOUND,
  //   );
  // }

  // async ban(dto: BanUserDto) {
  //   const user = await this.userRepository.findByPk(dto.userId);
  //   if (!user) {
  //     throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  //   }
  //   user.banned = true;
  //   user.banReason = dto.banReason;
  //   await user.save();
  //   return user;
  // }
}
