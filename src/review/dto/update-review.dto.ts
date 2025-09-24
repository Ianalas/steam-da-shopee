import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import{
    IsString,
    IsOptional,
    Length,
    IsNumber,
    Min,
    Max
} from 'class-validator';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
        @IsOptional()
        @IsString()
        @Length(10, 2000)
        readonly content?: string;

        @IsOptional()
        @IsNumber()
        @Min(0)
        @Max(5)
        readonly rating?: number;
}
