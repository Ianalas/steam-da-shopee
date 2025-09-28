import { 
  IsString, 
  IsNumber, 
  IsArray, 
  IsDateString,
  IsUrl
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  launchDate: string;

  @IsUrl()
  urlPicture: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  publisher: string;

  @IsString()
  studio: string;

  @IsNumber()
  price: number;
}
