import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwrAuthGuard } from '../authentication/guards/jwt.guard';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('test')
  @UseGuards(JwrAuthGuard)
  async test(@Req() req: Request): Promise<Express.User> {
    return req.user;
  }
}
