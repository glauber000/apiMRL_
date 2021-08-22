import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';
import { Plano, PlanoDocument } from './entities/plano.entity';

@Injectable()
export class PlanosService {
  constructor(@InjectModel(Plano.name) private planoModel: Model<PlanoDocument>){}

  create(createPlanoDto: CreatePlanoDto) {
    const plano = new this.planoModel(createPlanoDto);
    return plano.save();
  }

  findAll() {
    return this.planoModel.find();
  }

  findOne(id: string) {
    return this.planoModel.findById(id);
  }

  update(id: string, updatePlanoDto: UpdatePlanoDto) {
    return this.planoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          ...updatePlanoDto,
        },
      },
      {
        new: true,
      }
    );
  }

  remove(id: string) {
    return this.planoModel.deleteOne(
      {
        _id: id,
      },
    ).exec();
  }
}
