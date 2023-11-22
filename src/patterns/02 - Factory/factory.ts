/**
 * Our product
 */
class Car {
  private readonly manufacturer: string;
  private readonly model: string;
  constructor(manufacturer: string, model: string) {
    this.manufacturer = manufacturer;
    this.model = model;
  }
  public toString(): string {
    return `${this.manufacturer}, ${this.model}`;
  }
}


class CarFactory{

  constructor(private manufacturer: string) {
  }

  public build(model: string): Car {
    return new Car(this.manufacturer, model);
  }
}

const toyotaFactory = new CarFactory("Toyota");

const yaris = toyotaFactory.build("Yaris");
const prius = toyotaFactory.build("Prius");

console.log(yaris.toString());
console.log(prius.toString());