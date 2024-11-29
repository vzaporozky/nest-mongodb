import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cat } from './cat.schema';

@Controller('/cat')
export class CatController {
  constructor(private catService: CatService) {}

  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({ status: 200, type: [Cat] })
  @Get('')
  getCats() {
    return this.catService.findAll();
  }
}
