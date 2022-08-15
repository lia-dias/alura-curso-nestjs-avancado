import { Injectable } from "@nestjs/common";
import Usuario from "./usuario.model";

@Injectable()
export default class UsuarioService {

    private nextId = 1;
    private usuarios: Usuario[] = [];

    getNextId() {
        return this.nextId++;
    }

    create(usuario: Usuario): Usuario {
        usuario.id = this.getNextId();
        usuario.dataDeCadastro = (new Date(Date.now())).toISOString();
        this.usuarios.push(usuario);
        return usuario;
    }

    find(nomeDeUsuario: string): Usuario {
        return this.usuarios.filter((usuario) => usuario.nomeDeUsuario === nomeDeUsuario)[0];
    }
}