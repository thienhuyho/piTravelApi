import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HotelsModule,
    MongooseModule.forRoot(
      'mongodb+srv://truvihiu:4q1VDSdvtHieKc2Y@cluster0.o4xdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        autoCreate: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
