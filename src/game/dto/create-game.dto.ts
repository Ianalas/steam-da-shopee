import { IsString, IsNumber, IsOptional, IsArray, IsDateString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  launchDate: string; // usa string no DTO, será convertido depois para Date

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
  releaseDate: string;
}
