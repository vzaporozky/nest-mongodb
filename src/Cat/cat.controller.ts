import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cat } from './cat.schema';
import { catDto } from './dto/cat-dto';

@Controller('/cat')
export class CatController {
  constructor(private catService: CatService) {}

  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({ status: 200, type: [Cat] })
  @Get('')
  getCats() {
    return this.catService.findAll();
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: Cat })
  @Post('')
  create(@Body() catDto: catDto) {
    return this.catService.create(catDto);
  }
}
