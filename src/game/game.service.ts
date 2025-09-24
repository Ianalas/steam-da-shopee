import { Injectable } from '@nestjs/common';
import { Prisma, Game } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GameCreateInput): Promise<Game> {
    return this.prisma.game.create({ data });
  }

  async findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findOne(userWhereUniqueInput: Prisma.GameWhereUniqueInput): Promise<Game | null> {
    return this.prisma.game.findUnique({
      where: userWhereUniqueInput
    })
  }

  async update(params: {
    where: Prisma.GameWhereUniqueInput;
    data: Prisma.GameUpdateInput;
  }): Promise<Game> {
    const { where, data } = params;
    return this.prisma.game.update({ where, data });
  }

  async remove(where: Prisma.GameWhereUniqueInput): Promise<Game> {
    return this.prisma.game.delete({
      where
    })
  }
}
