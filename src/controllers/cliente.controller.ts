import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClienteEntity } from "src/entities/cliente.entity";
import { ClienteService } from "src/services/cliente.service";



@Controller("clientes")
export class clienteController{

    constructor(private clienteservice: ClienteService){

    }

    @Post()
    async registrar(@Body() cliente:ClienteEntity): Promise<ClienteEntity>{
        return this.clienteservice.registrar(cliente);
    }

    @Put()
    async actulizar(@Body() cliente:ClienteEntity): Promise<ClienteEntity>{
        return this.clienteservice.actualizar(cliente);

    }

    @Get()
    async finall(): Promise<ClienteEntity[]>{
        return this.clienteservice.findall();
    }

    @Post("/login")
    async login(@Body() cliente:ClienteEntity){
        return this.clienteservice.login(cliente);
    }

    @Get(":id")
    async finId(@Param("id") id: number): Promise<ClienteEntity[]>{
        return this.clienteservice.finId(id);
    }

    @Get("roles/:rol")
    async buscarcli(@Param("rol") rol: string): Promise<ClienteEntity[]>{
        return this.clienteservice.buscarcli(rol);

    }


    @Delete(":id")
    async eliminar(@Param("id") id: number){
        return this.clienteservice.eliminar(id);
    }

    
}