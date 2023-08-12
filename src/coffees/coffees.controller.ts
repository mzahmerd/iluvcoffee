import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  HttpCode,
  HttpStatus,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id);
  }
  @Post()
  create(@Body() createCoffeeDot: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDot);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeeService.remove(id);
  }
}
