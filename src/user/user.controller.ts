import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from 'generated/prisma';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('users') // Agrupa no Swagger
@Controller('users/v1/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: CreateUserDto, description: 'Payload para criar usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso', type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários cadastrados' })
  @ApiResponse({ status: 200, description: 'Lista de usuários', type: [CreateUserDto] })
  findAll(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um usuário específico pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 'user-id-aqui' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado', type: CreateUserDto })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOne(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.findOne({ id });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um usuário existente' })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 'user-id-aqui' })
  @ApiBody({ type: UpdateUserDto, description: 'Campos a serem atualizados' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado', type: UpdateUserDto })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserModel> {
    return this.userService.update({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário do sistema' })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 'user-id-aqui' })
  @ApiResponse({ status: 204, description: 'Usuário removido' })
  remove(@Param('id') id: string): Promise<UserModel> {
    return this.userService.remove({ id });
  }
}
