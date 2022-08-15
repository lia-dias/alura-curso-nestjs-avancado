import { Module } from "@nestjs/common";
import UsuarioController from "./usuario.controller";
import UsuarioService from "./usuario.service";
import { UsuarioValidationUnicoConstraint } from "./usuario.validation";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioValidationUnicoConstraint]
})
export class UsuarioModule {}