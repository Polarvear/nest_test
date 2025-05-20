import { Controller, Get, Post, Render, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  @Render('login')
  getLogin() {
    return { error: null };
  }

  @Post('login')
  @Render('login')
  async postLogin(@Body() body) {
    // Add your authentication logic here
    // For now, just return the form with an error message
    return { error: 'Invalid credentials' };
  }
}
