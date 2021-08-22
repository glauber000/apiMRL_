import { Module } from '@nestjs/common';
import { PlanosService } from './planos.service';
import { PlanosController } from './planos.controller';
import { Plano, PlanoSchema } from './entities/plano.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Plano.name, schema: PlanoSchema }])],
  controllers: [PlanosController],
  providers: [PlanosService]
})
export class PlanosModule {}
