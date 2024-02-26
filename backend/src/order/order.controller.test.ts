import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  describe('create', () => {
    it('should call orderService.create with the provided createOrderDto', () => {
      const createOrderDto: CreateOrderDto = {
        totalPrice: 100,
        orderPlacement: new Date(),
        deliveryDate: new Date(),
        userId: '1',
      };
      const createSpy = jest.spyOn(service, 'create');

      controller.create(createOrderDto);

      expect(createSpy).toHaveBeenCalledWith(createOrderDto);
    });
  });

  describe('findAll', () => {
    it('should call orderService.findAll', () => {
      const findAllSpy = jest.spyOn(service, 'findAll');

      controller.findAll();

      expect(findAllSpy).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call orderService.findOne with the provided id', () => {
      const id = '1';
      const findOneSpy = jest.spyOn(service, 'findOne');

      controller.findOne(id);

      expect(findOneSpy).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should call orderService.update with the provided id and updateOrderDto', () => {
      const id = '1';
      const updateOrderDto: UpdateOrderDto = {
        totalPrice: 100,
        orderPlacement: new Date(),
        deliveryDate: new Date(),
        userId: '1',
      };
      const updateSpy = jest.spyOn(service, 'update');

      controller.update(id, updateOrderDto);

      expect(updateSpy).toHaveBeenCalledWith(id, updateOrderDto);
    });
  });

  describe('remove', () => {
    it('should call orderService.remove with the provided id', () => {
      const id = '1';
      const removeSpy = jest.spyOn(service, 'remove');

      controller.remove(id);

      expect(removeSpy).toHaveBeenCalledWith(id);
    });
  });
});
