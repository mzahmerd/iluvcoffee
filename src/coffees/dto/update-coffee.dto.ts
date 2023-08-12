import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

/*
    PartialType returns the type passed into it,
    with all the properties set to optional by adding IsOptional() rule
    and inherits all the validation rules applied via decorators.
*/
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
