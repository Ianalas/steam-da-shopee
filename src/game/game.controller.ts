import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { Game as GameModel } from 'generated/prisma';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games/v1/api')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(): Promise<GameModel[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameModel | null> {
    return this.gameService.findOne({ id })
  }

  @Post()
  create(@Body() gameData: CreateGameDto): Promise<GameModel> {
    return this.gameService.create({
      ...gameData,
      launchDate: new Date(gameData.launchDate),
      reviews: {
        create: []
      }
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() gameData: UpdateGameDto): Promise<GameModel> {
    return this.gameService.update({
      where: { id },
      data: gameData
    })
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<GameModel> {
    return this.gameService.remove({ id });
  }
}
