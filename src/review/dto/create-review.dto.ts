import{
    IsString,
    IsNumber,
    Min,
    Max,
    IsInt,
    IsNotEmpty,
    IsOptional,
    Length
} from 'class-validator';

export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    @Length(10, 2000)
    readonly content: string;

    @IsNumber()
    @Min(0)
    @Max(5)
    readonly rating: number;

    @IsInt()
    @IsNotEmpty()
    readonly gameId: number;

    @IsOptional()
    @IsInt()
    readonly userId : number;
}
