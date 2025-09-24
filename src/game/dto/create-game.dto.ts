import { 
  IsString, 
  IsNumber, 
  IsOptional, 
  IsArray, 
  IsDateString 
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  launchDate: string; // recebido como string ISO

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  publisher: string;

  @IsString()
  studio: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  review?: number;

  @IsDateString()
  releaseDate: string; // também string ISO
}
