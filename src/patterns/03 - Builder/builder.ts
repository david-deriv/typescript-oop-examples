interface CarBuilder {
  manufacturer: string;
  model: string;
  setManufacturer(string: string): CarBuilder;
  setModel(string: string): CarBuilder;
  getCar(): Car;
}

/**
 * Our composable Product class, it's not necessary that the composable class takes an
 * instance of the builder as its primary method. More often than not this is not
 * possible without a lot of refactoring. Any class that has data set via a constructor
 * or method can be used with a builder.
 */
class Car {
  /**
   * We can keep data readonly and private to avoid mutability. This is one of the biggest
   * benefits of composition.
   * @private
   */
  private readonly manufacturer: string;
  private readonly model: string;

  /**
   * We could just as easily add multiple arguments here for the different values and have
   * the builder set them on the instance when we construct the class.
   * @param builder
   */
  constructor(builder: CarBuilder) {
    this.manufacturer = builder.manufacturer;
    this.model = builder.model;
  }

  /**
   * We could do anything with the data we have composed this class with, this is just an example
   * of usage
   */
  toString() {
    return `${this.manufacturer} ${this.model}`;
  }
}

/**
 * Our composition of the car class. This specific composition exposes a fluent API that allows us to
 * compose and instantiate a Car instance in one expression.
 */
class GenericCarBuilder implements CarBuilder {
  /**
   * Our composable values, these could be protected or private if we exposed a `get` method for them
   * as well as the set methods. We assign defaults as we are not defining the values in the constructor
   */
  public manufacturer: string = "";
  public model: string = "";

  /**
   * Expose a method to add manufacturer data to our builder
   * @param manufacturer
   */
  setManufacturer(manufacturer: string): GenericCarBuilder {
    this.manufacturer = manufacturer;
    return this;
  }

  /**
   * Expose a method to set model data to our builder
   * @param model
   */
  setModel(model: string): GenericCarBuilder {
    this.model = model;
    return this;
  }

  /**
   * Get the Car instance using our composed data or throw errors if we are
   * missing some data.
   */
  getCar(): Car {
    let errors: Error[] = [];

    if (this.manufacturer.length < 1) {
       errors.push(new Error("Manufacturer is not set"));
    }

    if (this.model.length < 1) {
       errors.push(new Error("Model is not set"));
    }

    if (errors.length > 0) {
      throw new AggregateError(errors);
    }

    return new Car(this);
  }
}

/**
 * Usage
 */
const BMWBuilder = (new GenericCarBuilder()).setManufacturer("BMW");

const OneThirtyFiveI = BMWBuilder.setModel("135i").getCar();
const OneTwentyThreeD = BMWBuilder.setModel("123d").getCar();

console.log(OneThirtyFiveI.toString());
console.log(OneTwentyThreeD.toString());


const newCar = new Car(new GenericCarBuilder());
const different = new Car();