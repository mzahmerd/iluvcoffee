import { Controller, Get, Param, Post, Body, Query, HttpCode, HttpStatus, Patch, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {

  }   
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }
  @Post()
  create(@Body() body) {
    return this.coffeeService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeeService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
