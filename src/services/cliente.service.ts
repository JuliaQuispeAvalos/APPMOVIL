import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { ClienteEntity } from "src/entities/cliente.entity";
import { DataSource, Repository } from "typeorm";





@Injectable()
export class ClienteService{

    constructor(@InjectRepository(ClienteEntity) private clienterepository: Repository<ClienteEntity>,
                @InjectDataSource() private dataSource:DataSource){

    }

    registrar(cliente:ClienteEntity){

        return this.clienterepository.save(cliente);
    }

    actualizar(cliente:ClienteEntity){
        return this.clienterepository.save(cliente);
    
    }

    findall(){
        return this.clienterepository.find({
            relations: {
              ubigeo: true  
            }}
        );
    }

    eliminar(id: number){
        return this.clienterepository.delete(id);

    }

    finId(id: number){
        return this.clienterepository.find({
            where : {id},
            relations:{
                ubigeo: true
            }

        });
    }

    buscarcli(rol: string){
        return this.clienterepository.findBy({rol})
    }

    async login(cliente:ClienteEntity){
        return this.dataSource.query("SELECT * FROM PERSONA where CONPER='" + cliente.contraseña + "' and DNIPER ='" + cliente.dni + "'")
    }


    
}