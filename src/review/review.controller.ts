import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('reviews') // Agrupa no Swagger
@Controller('reviews/v1/api')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova review para um jogo' })
  @ApiBody({ type: CreateReviewDto, description: 'Payload para criar review' })
  @ApiResponse({ status: 201, description: 'Review criada com sucesso', type: CreateReviewDto })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as reviews cadastradas' })
  @ApiResponse({ status: 200, description: 'Lista de reviews', type: [CreateReviewDto] })
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma review específica pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da review', example: 'review-id-aqui' })
  @ApiResponse({ status: 200, description: 'Review encontrada', type: CreateReviewDto })
  @ApiResponse({ status: 404, description: 'Review não encontrada' })
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma review existente' })
  @ApiParam({ name: 'id', description: 'ID da review', example: 'review-id-aqui' })
  @ApiBody({ type: UpdateReviewDto, description: 'Campos a serem atualizados' })
  @ApiResponse({ status: 200, description: 'Review atualizada', type: UpdateReviewDto })
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma review do sistema' })
  @ApiParam({ name: 'id', description: 'ID da review', example: 'review-id-aqui' })
  @ApiResponse({ status: 204, description: 'Review removida' })
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
