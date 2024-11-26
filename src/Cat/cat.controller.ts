import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/api')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('/cats')
  getUsers() {
    return this.catService.findAll();
  }
}
