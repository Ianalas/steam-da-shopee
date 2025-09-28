import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        // accountCreatedAt será gerado automaticamente pelo prisma
      },
      include: {
        reviews: {
          include: {
            game: true
          }
        }
      }
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        reviews: {
          include: {
            game: true
          }
        }
      },
      orderBy: {
        accountCreatedAt: 'desc'
      }
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
      include: {
        reviews: {
          include: {
            game: true // Inclui os detalhes do jogo em cada review
          }
        }
      }
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      where,
      data: {
        name: data.name,
      },
      include: {
        reviews: {
          include: {
            game: true
          }
        }
      }
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
      include: {
        reviews: true
      }
    });
  }
}