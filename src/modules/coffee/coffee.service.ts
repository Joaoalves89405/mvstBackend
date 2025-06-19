import { BadRequestException, Injectable } from '@nestjs/common';
import { CoffeeRepository } from './coffee.repository';
import { CreateCoffeeDto } from './dto/coffee.dto';

@Injectable()
export class CoffeeService {
  constructor(private readonly coffeeRepository: CoffeeRepository) {}

  async findAll() {
    return this.coffeeRepository.findAll();
  }

  async findAllByType(typeId: string) {
    return this.coffeeRepository.find({ where: { typeId } });
  }

  async create(dto: CreateCoffeeDto) {
    const existing = await this.coffeeRepository.findByName(dto.name);
    if (existing) {
      throw new BadRequestException('Coffee with this name already exists');
    }

    return this.coffeeRepository.create({
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
      price: dto.price,
      type: {
        connect: { id: dto.typeId },
      },
    });
  }

  async getAllTypes() {
    return this.coffeeRepository.getAllTypes();
  }
}
