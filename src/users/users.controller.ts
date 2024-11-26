import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/api')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/user')
  getUsers() {
    return this.userService.findAll();
  }
}
