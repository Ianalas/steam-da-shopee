import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // accountCreatedAt será gerado automaticamente pelo Prisma
  // reviews será gerenciado automaticamente pelo Prisma
}