import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { FitroDeExcecaoHttp } from "src/common/filtros/filtro-de-excecao-http.filter";
import { TransformaRespostaInterceptor } from "src/core/http/transforma-resposta.interceptor";
import UsuarioController from "./usuario.controller";
import UsuarioService from "./usuario.service";
import { UsuarioValidationUnicoConstraint } from "./usuario.validation";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioValidationUnicoConstraint,
    {
        provide: APP_FILTER,
        useClass: FitroDeExcecaoHttp
    },
    {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor
    }]
})
export class UsuarioModule {}