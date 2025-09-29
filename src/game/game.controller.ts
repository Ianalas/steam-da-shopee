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
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('games') // Agrupa no Swagger
@Controller('games/v1/api')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os jogos cadastrados com suas reviews' })
  @ApiResponse({ status: 200, description: 'Lista de jogos', type: [CreateGameDto] })
  findAll(): Promise<GameModel[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um jogo específico pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do jogo', example: '55e925f8-8026-47ed-b992-658f0fc2f0a2' })
  @ApiResponse({ status: 200, description: 'Jogo encontrado', type: CreateGameDto })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado' })
  findOne(@Param('id') id: string): Promise<GameModel | null> {
    return this.gameService.findOne({ id });
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo jogo' })
  @ApiBody({ type: CreateGameDto, description: 'Payload para criar um jogo' })
  @ApiResponse({ status: 201, description: 'Jogo criado com sucesso', type: CreateGameDto })
  create(@Body() gameData: CreateGameDto): Promise<GameModel> {
    return this.gameService.create({
      ...gameData,
      launchDate: new Date(gameData.launchDate),
      reviews: {
        create: []
      }
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um jogo existente' })
  @ApiParam({ name: 'id', description: 'ID do jogo', example: '55e925f8-8026-47ed-b992-658f0fc2f0a2' })
  @ApiBody({ type: UpdateGameDto, description: 'Campos a serem atualizados' })
  @ApiResponse({ status: 200, description: 'Jogo atualizado', type: UpdateGameDto })
  update(@Param('id') id: string, @Body() gameData: UpdateGameDto): Promise<GameModel> {
    return this.gameService.update({
      where: { id },
      data: gameData
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um jogo do sistema' })
  @ApiParam({ name: 'id', description: 'ID do jogo', example: '55e925f8-8026-47ed-b992-658f0fc2f0a2' })
  @ApiResponse({ status: 204, description: 'Jogo removido' })
  remove(@Param('id') id: string): Promise<GameModel> {
    return this.gameService.remove({ id });
  }
}
