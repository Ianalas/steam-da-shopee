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
    description: string;

    @IsNumber()
    @Min(0)
    timePlayed: number;

    @IsString()
    @IsNotEmpty()
    gameId: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
