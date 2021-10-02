import { Controller, Get } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelService: HotelsService) {}
  @Get()
  async all() {
    return this.hotelService.all();
  }
}
