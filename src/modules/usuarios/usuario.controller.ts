import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('usuarios')
export default class UsuarioController{

    @Get(':usuarioNome')
    buscaUsuarioPorUsuarioNome(@Param('usuarioNome') usuarioNome:string){
        throw new Error('To Do');
    }

    @Post()
    criaUsuario(@Body() usuario:any): any {
        throw new Error('To Do');
    }
}