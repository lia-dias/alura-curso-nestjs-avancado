import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { NomeDeUsuarioUnico } from './usuario.validation';

export default class Usuario {
    id: number;

    @IsString({
        message: 'nome_de_usuario precisa ser uma string'
    })
    @IsNotEmpty({
        message: 'nome_de_usuario precisa ser informado'
    })
    @NomeDeUsuarioUnico({
        message: 'nome_de_usuario deve ser único'
    })
    @Expose({
        name: 'nome_de_usuario'
    })
    nomeDeUsuario: string;

    @IsNotEmpty({
        message: 'nomeDeUsuario precisa ser informado'
    })
    @IsEmail({}, {
        message: 'email precisa ser válido'
    })
    email: string;

    @IsNotEmpty({
        message: 'senha é obrigatório'
    })
    @Exclude({
        toPlainOnly: true
    })
    senha: string;
    
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    @Expose({
        name: 'nome_completo'
    })
    nomeCompleto: string;

    @Expose({
        name: 'data_de_cadastro'
    })
    dataDeCadastro: string;
}