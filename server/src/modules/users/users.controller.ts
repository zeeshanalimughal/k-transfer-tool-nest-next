import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('test')
  async test(): Promise<string> {
    return 'test';
  }
}
