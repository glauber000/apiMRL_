import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plano } from 'src/planos/entities/plano.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente, ClienteDocument } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>){}

  create(createClienteDto: CreateClienteDto) {
    const cliente = new this.clienteModel(createClienteDto);
    return cliente.save();
  }

  findAll() {
    return this.clienteModel.find();
  }

  findOne(id: string) {
    return this.clienteModel.findById(id);
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.clienteModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          ...updateClienteDto,
        },
      },
      {
        new: true,
      },
    )
  }

  remove(id: string) {
    return this.clienteModel.deleteOne(
      {
        _id: id,
      }
    ).exec();
  }

  async addPlan(plano: any,id: string){
    const user = await this.findOne(id);
    user.planos.push(plano);
    return this.update(id,user);
  }

  async alterPlan(planAtual: any,newPlan: any,idUser: string){
    const user = await this.findOne(idUser);
    const index = user.planos.findIndex(x => x.descricao == planAtual.descricao);
    user.planos[index] = newPlan
    return this.update(idUser,user);
  }
}
