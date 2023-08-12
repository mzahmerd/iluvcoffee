export class UpdateCoffeeDto {
  readonly name?: string; // ? means they are optional
  readonly brand?: string;
  readonly flavors?: string[];
}
