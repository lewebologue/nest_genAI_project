import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderController } from './Order.controller';
import { OrderService } from './Order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService],
})
export class OrderModule {}
