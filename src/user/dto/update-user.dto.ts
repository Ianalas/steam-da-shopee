import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Todos os campos do CreateUserDto já são opcionais aqui
  // Se houver campos adicionais opcionais para atualizar, adicione com @ApiPropertyOptional
}
