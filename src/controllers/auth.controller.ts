import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Logindtos } from "src/dtos/login.dtos";
import { ClienteEntity } from "src/entities/cliente.entity";
import { AuthService } from "src/services/auth.service";
import { ClienteService } from "src/services/cliente.service";

@Controller("auth")
export class AuthController{

    constructor(private authService: AuthService){

    }

    @Post()
    async login(@Body() login:Logindtos){
        return this.authService.findBuUser(login.usuario, login.contraseña)
    }

}