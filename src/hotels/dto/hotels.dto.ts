import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HotelDocument = Hotel & Document;
@Schema()
export class Hotel {
  @Prop()
  id: number;
  @Prop()
  location_id: number;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  address: string;
  @Prop()
  evaluation: number;
  @Prop()
  price: number;
  @Prop()
  lat: number;
  @Prop()
  long: number;
  @Prop()
  description: string;
}
export const HotelSchema = SchemaFactory.createForClass(Hotel);
