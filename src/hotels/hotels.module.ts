import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Hotel, HotelSchema } from './dto/hotels.dto';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
})
export class HotelsModule {}
