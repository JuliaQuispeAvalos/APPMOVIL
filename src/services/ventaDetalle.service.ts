import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VentaDetalleEntity } from "src/entities/ventaDetalle.entity";
import { Repository } from "typeorm";



@Injectable()
export class VentaDetallaService{

    constructor(@InjectRepository(VentaDetalleEntity) private ventaDetallerepositori:Repository<VentaDetalleEntity>){

    }

    registrar(ventadetalle:VentaDetalleEntity){
        return this.ventaDetallerepositori.save(ventadetalle);
    }

    findall(){
        return this.ventaDetallerepositori.find();
    }
}