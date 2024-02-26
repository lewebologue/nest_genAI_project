import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
