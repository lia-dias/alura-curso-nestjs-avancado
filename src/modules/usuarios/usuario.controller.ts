import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import Usuario from "./usuario.model";
import UsuarioService from "./usuario.service";

@Controller('usuarios')
export default class UsuarioController{

    constructor(private readonly usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    buscaUsuarioPorUsuarioNome(@Param('nomeDeUsuario') nomeDeUsuario:string): Usuario {
        const usuarioEncontrado = this.usuarioService.find(nomeDeUsuario);

        if(!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado'
            })
        }

        return usuarioEncontrado;
    }

    @Post()
    criaUsuario(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.create(usuario);

        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeaders({
                    'Location': `/users/${usuarioCriado.nomeDeUsuario}`
                })
                .comBody(usuarioCriado)
                .build();
    }
}