import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import UsuarioController from "./usuario.controller";
import UsuarioService from "./usuario.service";
import { UsuarioValidationUnicoConstraint } from "./usuario.validation";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioValidationUnicoConstraint,
    {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor
    }]
})
export class UsuarioModule {}