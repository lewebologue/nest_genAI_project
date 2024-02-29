import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('authentication')
export class AuthenticationController {
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return loginDto;
  }
}
