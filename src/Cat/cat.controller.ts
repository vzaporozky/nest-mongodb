import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/cat')
export class CatController {
  constructor(private catService: CatService) {}

  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({ status: 200 })
  @Get('')
  getUsers() {
    return this.catService.findAll();
  }
}
