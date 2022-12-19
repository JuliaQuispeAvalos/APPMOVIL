import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "src/entities/cliente.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class AuthService{

    constructor(@InjectRepository(ClienteEntity) private clienterepository: Repository<ClienteEntity>){

    }

    findBuUser(user:string, contraseña: string){
        return this.clienterepository.find({
            where:{
                dni: user,
                contraseña: contraseña
            }
        })
    }
}