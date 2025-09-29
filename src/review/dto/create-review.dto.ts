import {
  IsString,
  IsNumber,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({ example: 'Um dos melhores jogos de plataforma 3D!', description: 'Descrição da review' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 3000, description: 'Tempo jogado em minutos' })
  @IsNumber()
  @Min(0)
  timePlayed: number;

  @ApiProperty({ example: '55e925f8-8026-47ed-b992-658f0fc2f0a2', description: 'ID do jogo relacionado' })
  @IsString()
  @IsNotEmpty()
  gameId: string;

  @ApiProperty({ example: 'user-id-aqui', description: 'ID do usuário que fez a review' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
