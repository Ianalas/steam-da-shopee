import { IsString, IsNumber, IsOptional, IsArray, IsDateString } from 'class-validator';

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  launchDate?: string; // string para ser convertido em Date depois

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @IsString()
  studio?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  review?: number;

  @IsOptional()
  @IsDateString()
  releaseDate?: string;
}
