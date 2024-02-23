import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should call userService.createUser with correct parameters', async () => {
    const createUserDto = {
      name: 'Test',
      firstName: 'User',
      email: 'test@example.com',
      password: 'password',
    };

    await userController.create(createUserDto);

    expect(userService.createUser).toHaveBeenCalledWith(createUserDto);
  });

  it('should call userService.findAll', async () => {
    await userController.findAll();

    expect(userService.findAll).toHaveBeenCalled();
  });
});
