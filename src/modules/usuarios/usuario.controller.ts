import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import Usuario from "./usuario.model";

@Controller('usuarios')
export default class UsuarioController{

    @Get(':usuarioNome')
    buscaUsuarioPorUsuarioNome(@Param('usuarioNome') usuarioNome:string): Usuario {
        throw new Error('To Do');
    }

    @Post()
    criaUsuario(@Body() usuario: Usuario): Usuario {
        throw new Error('To Do');
    }
}