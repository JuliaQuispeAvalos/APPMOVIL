import { Body, Controller,Delete,Get, Param, Post, Put } from "@nestjs/common";
import { ProductoEntity } from "src/entities/producto.entity";
import { ProductoService } from "src/services/producto.service";


@Controller("productos")
export class ProductoController{

    constructor(private productoservice:ProductoService){

    }

    @Get()
    async finall(): Promise<ProductoEntity[]>{
        return this.productoservice.listar();
    }

    @Get("/nombre/:name")
    finByName(@Param("name") name: string){
        return this.productoservice.finByName(name);
    }

    @Delete("/delete/:id")
    async delete(@Param("id") id: string) {
    this.productoservice.deleteLogical(id);
  }

  @Put()
    async actulizar(@Body() producto:ProductoEntity): Promise<ProductoEntity>{
        return this.productoservice.actualizar(producto);

    }

    @Post()
    async registrar(@Body()  producto:ProductoEntity): Promise<ProductoEntity>{
        return this.productoservice.registrar(producto);
    }
}

