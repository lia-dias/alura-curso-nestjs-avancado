import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export default class Usuario {
    id: number;

    @IsString({
        message: 'nomeDeUsuario precisa ser uma string'
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario precisa ser informado'
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
    senha: string;
    
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório.'
    })
    nomeCompleto: string;
    dataDeCadastro: string;
}