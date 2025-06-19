import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/providers/db/database.service';

@Injectable()
export class CoffeeRepository {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    return this.db.coffee.findMany({
      include: { type: true },
    });
  }

  async find(params: { where?: { typeId?: string } }) {
    return this.db.coffee.findMany({
      where: params.where,
      include: { type: true },
    });
  }

  async findByName(name: string) {
    return this.db.coffee.findUnique({ where: { name } });
  }

  async create(data: any) {
    return this.db.coffee.create({ data });
  }

  async getAllTypes() {
    return this.db.coffeeType.findMany();
  }
}
