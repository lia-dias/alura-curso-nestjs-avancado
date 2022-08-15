import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidationArguments, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from 'class-validator';
import UsuarioService from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class UsuarioValidationUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private readonly usuarioService: UsuarioService) {}

    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.find(nomeDeUsuario);
    }
}


export function NomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        validator: UsuarioValidationUnicoConstraint
      });
    };
  }