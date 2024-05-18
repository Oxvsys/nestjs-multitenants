import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDemoDto } from './dto/create-demo.dto';
import { Demo } from './demo.entity';
import { DemosService } from './demos.service';

@Controller('demos')
export class DemosController {
  constructor(private readonly demosService: DemosService) {}

  @Post()
  create(@Body() createDemoDto: CreateDemoDto): Promise<Demo> {
    return this.demosService.create(createDemoDto);
  }

  @Get()
  findAll(): Promise<Demo[]> {
    return this.demosService.findAll();
  }
}
