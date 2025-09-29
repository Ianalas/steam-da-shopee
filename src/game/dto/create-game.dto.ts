import { 
  IsString, 
  IsNumber, 
  IsArray, 
  IsDateString,
  IsUrl
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({ example: 'Super Mario Odyssey', description: 'Título do jogo' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Um jogo de plataforma 3D', description: 'Descrição do jogo' })
  @IsString()
  description: string;

  @ApiProperty({ example: '2017-10-27T00:00:00.000Z', description: 'Data de lançamento do jogo' })
  @IsDateString()
  launchDate: string;

  @ApiProperty({ example: 'https://example.com/mario.jpg', description: 'URL da imagem do jogo' })
  @IsUrl()
  urlPicture: string;

  @ApiProperty({ example: ['Plataforma', '3D', 'Aventura'], description: 'Tags ou gêneros do jogo' })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ example: 'Nintendo', description: 'Editora do jogo' })
  @IsString()
  publisher: string;

  @ApiProperty({ example: 'Nintendo EPD', description: 'Estúdio do jogo' })
  @IsString()
  studio: string;

  @ApiProperty({ example: 299.9, description: 'Preço do jogo' })
  @IsNumber()
  price: number;
}
