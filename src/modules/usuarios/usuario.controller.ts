import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import Usuario from "./usuario.model";
import UsuarioService from "./usuario.service";

@Controller('usuarios')
export default class UsuarioController{

    constructor(private readonly usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    buscaUsuarioPorUsuarioNome(@Param('nomeDeUsuario') nomeDeUsuario:string): Usuario {
        return this.usuarioService.find(nomeDeUsuario);
    }

    @Post()
    criaUsuario(@Body() usuario: Usuario): Usuario {
        return this.usuarioService.create(usuario);
    }
}