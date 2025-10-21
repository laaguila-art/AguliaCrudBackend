import {
  Controller,
  Body,
  Post,
  Patch,
  UseGuards,
  Get,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guards/guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email?: string,
  ) {
    return this.authService.signup(username, password, email);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    try {
      const result = await this.authService.login(username, password);
      console.log('Controller received result:', !!result.accessToken);
      return result;
    } catch (error) {
      console.error('Controller caught error:', error);
      throw error;
    }
  }

  @UseGuards(AuthGuard)
  @Post('user')
  async create(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email?: string,
  ) {
    return this.authService.signup(username, password, email);
  }

  @UseGuards(AuthGuard)
  @Get('user')
  async findAll() {
    return this.authService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get('user/:id')
  async findOne(@Param('id') id: number) {
    return this.authService.getOne(id);
  }

  @UseGuards(AuthGuard)
  @Delete('user/:id')
  async deleteUser(@Param('id') id: number) {
    return this.authService.delete(id);
  }

  @Patch('user/:id')
  async updateUser(
    @Param('id') id: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.update(id, username, password);
  }
}
