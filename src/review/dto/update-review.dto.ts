import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import {
  IsString,
  IsOptional,
  Length,
  IsNumber,
  Min,
  Max
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
  @ApiPropertyOptional({ example: 'Conteúdo atualizado da review', description: 'Texto da review (opcional)' })
  @IsOptional()
  @IsString()
  @Length(10, 2000)
  readonly content?: string;

  @ApiPropertyOptional({ example: 4.5, description: 'Nota da review (0 a 5, opcional)' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  readonly rating?: number;
}
