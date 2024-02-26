import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
            findOne: jest.fn().mockResolvedValue({}),
            update: jest.fn().mockResolvedValue({}),
            remove: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should call userService.createUser with correct parameters', async () => {
    const createUserDto: CreateUserDto = {
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

  it('should call userService.findOne with correct parameters', async () => {
    const id = '1';

    await userController.findOne(id);

    expect(userService.findOne).toHaveBeenCalledWith(id);
  });

  it('should call userService.update with correct parameters', async () => {
    const id = '1';
    const updateUserDto: UpdateUserDto = {
      name: 'Updated User',
      email: 'updated@example.com',
      password: 'updatedPassword',
    };

    await userController.update(id, updateUserDto);

    expect(userService.update).toHaveBeenCalledWith(id, updateUserDto);
  });

  it('should call userService.remove with correct parameters', async () => {
    const id = '1';

    await userController.remove(id);

    expect(userService.remove).toHaveBeenCalledWith(id);
  });
});
