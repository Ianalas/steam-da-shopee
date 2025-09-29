import { 
  IsString, 
  IsNumber, 
  IsOptional, 
  IsArray, 
  IsDateString 
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateGameDto {
  @ApiPropertyOptional({ example: 'Super Mario Odyssey', description: 'Título do jogo' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Um jogo de plataforma 3D', description: 'Descrição do jogo' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: '2017-10-27T00:00:00.000Z', description: 'Data de lançamento do jogo' })
  @IsOptional()
  @IsDateString()
  launchDate?: string; // recebido como string ISO, convertido para Date depois

  @ApiPropertyOptional({ example: ['Plataforma', '3D', 'Aventura'], description: 'Tags ou gêneros do jogo' })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({ example: 'Nintendo', description: 'Editora do jogo' })
  @IsOptional()
  @IsString()
  publisher?: string;

  @ApiPropertyOptional({ example: 'Nintendo EPD', description: 'Estúdio do jogo' })
  @IsOptional()
  @IsString()
  studio?: string;

  @ApiPropertyOptional({ example: 299.9, description: 'Preço do jogo' })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({ example: 4.5, description: 'Nota média de reviews do jogo' })
  @IsOptional()
  @IsNumber()
  review?: number;

  @ApiPropertyOptional({ example: '2017-10-27T00:00:00.000Z', description: 'Data de lançamento (release) do jogo' })
  @IsOptional()
  @IsDateString()
  releaseDate?: string; // também string ISO
}
