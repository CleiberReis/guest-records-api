import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Hello word!')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    status: 201,
    description: 'The request has been successfully.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
