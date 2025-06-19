import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsUUID()
  typeId: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
