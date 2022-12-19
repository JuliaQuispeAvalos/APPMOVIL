import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { ultimaventaDto } from "src/dtos/ultimaventa.dtos";
import { VentaEntity } from "src/entities/venta.entity";
import { VentaService } from "src/services/venta.service";



@Controller("venta")
export class VentaController{
    constructor(private ventaservice:VentaService){

    }

    @Post()
    async registrar(@Body() venta:VentaEntity): Promise<VentaEntity>{
        return this.ventaservice.registrar(venta)
    }

    @Get()
    async finall(): Promise<VentaEntity[]>{
        return this.ventaservice.findall();
    }

    @Get('/ultimaventa')
    async ultimaventa(): Promise<ultimaventaDto>{
        return this.ventaservice.ultimaventa();
    }
}