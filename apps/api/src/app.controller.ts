import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { env } from '@repo/config';
import { logger } from '@repo/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(env.JWT_SECRET);
    logger.info('API started :  hello world controller');
    return this.appService.getHello();
  }
}
