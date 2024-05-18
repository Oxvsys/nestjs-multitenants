import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantsModule } from './modules/public/tenants/tenants.module';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { CatsModule } from './modules/tenanted/cats/cats.module';
import { UsersModule } from './modules/public/users/users.module';

import * as ormconfig from './orm.config';
import { DemosModule } from './modules/public/demo/demos.module';
import { log } from 'console';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    CatsModule,
    UsersModule,
    DemosModule
  ],
})
export class AppModule {
  constructor(){
    console.log("-----------------------"+join(__dirname, './migrations/public/*{.ts,.js}'))
  }
}
