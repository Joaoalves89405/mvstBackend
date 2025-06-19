import { Module } from '@nestjs/common';
import { CoffeeController } from './modules/coffee/coffee.controller';
import { CoffeeRepository } from './modules/coffee/coffee.repository';
import { CoffeeService } from './modules/coffee/coffee.service';
import { DatabaseModule } from './providers/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CoffeeController],
  providers: [CoffeeService, CoffeeRepository],
})
export class AppModule {}
