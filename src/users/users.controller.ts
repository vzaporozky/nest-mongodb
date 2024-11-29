import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';

@Controller('/user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('')
  getUsers() {
    return this.userService.findAll();
  }

  // @ApiOperation({ summary: 'Create user' })
  // @ApiResponse({ status: 200, type: User })
  // @Post('')
  // create(@Body() userDto: CreateUserDto) {
  //   return this.userService.create(userDto);
  // }

  @ApiOperation({ summary: 'ban user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.userService.ban(dto);
  }

  @ApiOperation({ summary: 'Give user role' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Patch('/role')
  giveRole(@Body() roleDto: AddRoleDto) {
    return this.userService.addRole(roleDto);
  }
}
