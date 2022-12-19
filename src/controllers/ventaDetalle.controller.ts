import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { VentaDetalleEntity } from "src/entities/ventaDetalle.entity";
import { VentaDetallaService } from "src/services/ventaDetalle.service";



@Controller("ventaDetalle")
export class VentaDetalleController{

    constructor(private ventaDetalleService: VentaDetallaService){

    }

    @Post()
    async registrar(@Body() ventadetalle:VentaDetalleEntity): Promise<VentaDetalleEntity>{
        return this.ventaDetalleService.registrar(ventadetalle)
    }

    @Get()
    async findall(): Promise<VentaDetalleEntity[]>{
        return this.ventaDetalleService.findall();
    }

}