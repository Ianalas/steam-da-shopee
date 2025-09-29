import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Mario Fan', description: 'Nome do usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  // accountCreatedAt será gerado automaticamente pelo Prisma
  // reviews será gerenciado automaticamente pelo Prisma
}
