import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Get('')
  getUsers() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post('')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}
