import { Injectable } from '@nestjs/common';
import { Coffee, CoffeeType, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/providers/db/database.service';

@Injectable()
export class CoffeeRepository {
  constructor(private readonly db: DatabaseService) {}

  async findAll(): Promise<(Coffee & { type: CoffeeType })[]> {
    return this.db.coffee.findMany({
      include: { type: true },
    });
  }

  async find(params: {
    where?: { typeId?: string };
  }): Promise<(Coffee & { type: CoffeeType })[]> {
    return this.db.coffee.findMany({
      where: params.where,
      include: { type: true },
    });
  }

  async findByName(name: string): Promise<Coffee | null> {
    return this.db.coffee.findUnique({ where: { name } });
  }

  async create(data: Prisma.CoffeeCreateInput): Promise<Coffee> {
    return this.db.coffee.create({ data });
  }

  async getAllTypes(): Promise<CoffeeType[]> {
    return this.db.coffeeType.findMany();
  }
}
