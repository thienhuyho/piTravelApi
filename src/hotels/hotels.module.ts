import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Hotel, HotelSchema } from './dto/hotels.dto';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
