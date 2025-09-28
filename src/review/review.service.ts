import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        ...createReviewDto,
        gameId: createReviewDto.gameId,
        userId: createReviewDto.userId
      },
      include: {
        game: true,
        user: true
      }
    });
  }

  async findAll() {
    return this.prisma.review.findMany({
      include: {
        game: true,
        user: true
      }
    });
  }

  async findOne(id: string) {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        game: true,
        user: true
      }
    });
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
      include: {
        game: true,
        user: true
      }
    });
  }

  async remove(id: string) {
    return this.prisma.review.delete({
      where: { id },
      include: {
        game: true,
        user: true
      }
    });
  }
}
