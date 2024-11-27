import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('')
  getUsers() {
    return this.catService.findAll();
  }
}
