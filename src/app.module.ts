import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesModule } from './clientes/clientes.module';
import { PlanosModule } from './planos/planos.module';

@Module({
  imports: [ClientesModule, PlanosModule, MongooseModule.forRoot('mongodb://localhost:27017/mrl_dev')],
  controllers: [],
  providers: [],
})
export class AppModule {}
