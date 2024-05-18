import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './demo.entity';
import { DemosController } from './demos.controller';
import { DemosService } from './demos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Demo])],
  providers: [DemosService],
  controllers: [DemosController],
})
export class DemosModule {}
