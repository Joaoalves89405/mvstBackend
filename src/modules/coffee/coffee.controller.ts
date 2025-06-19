import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/coffee.dto';

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(@Query('typeId') typeId?: string) {
    if (typeId && typeId !== 'null') {
      return this.coffeeService.findAllByType(typeId);
    }
    return this.coffeeService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateCoffeeDto) {
    return this.coffeeService.create(dto);
  }

  @Get('/types')
  async getTypes() {
    return this.coffeeService.getAllTypes();
  }
}
