import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(`db name here : `, `${process.env.DB_HOST_SECTION_1}${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_HOST_SECTION_2}/${process.env.DB_NAME}`)
    return this.appService.getHello();
  }
}
