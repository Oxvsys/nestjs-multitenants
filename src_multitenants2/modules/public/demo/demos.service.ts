import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getTenantConnection } from '../../tenancy/tenancy.utils';
import { getManager, Repository } from 'typeorm';
import { CreateDemoDto } from './dto/create-demo.dto';
import { Demo } from './demo.entity';

@Injectable()
export class DemosService {
  constructor(
    @InjectRepository(Demo)
    private readonly demosRepository: Repository<Demo>,
  ) {}

  async create(createDemoDto: CreateDemoDto): Promise<Demo> {
    let demo = new Demo();
    demo.email = createDemoDto.email;
    demo.password = createDemoDto.password;

    demo = await this.demosRepository.save(demo);

    const schemaName = `tenant_${demo.id}`;
    await getManager().query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}"`);

    const connection = await getTenantConnection(`${demo.id}`);
    await connection.runMigrations()
    await connection.close();

    return demo 
  }

  async findAll(): Promise<Demo[]> {
    return this.demosRepository.find();
  }
}
