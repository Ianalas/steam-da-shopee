import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';

import { UpdateGameDto } from './dto/update-game.dto';
import  { CreateGameDto } from './dto/create-game.dto';

@Controller('games/v1/api')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':name')
  findOneByName(@Param('name') name: string){
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
