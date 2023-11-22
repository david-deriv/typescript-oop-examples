abstract class AbstractCarFactory{
  public abstract build(model?: string): Car;
}

// Concrete instance of our abstract factory
class ToyotaYarisFactory extends AbstractCarFactory {
  build(): Car {
    return new Car("Toyota", "Yaris");
  }
}

// Concrete instance of our Abstract Factory
class FerrariFactory extends AbstractCarFactory {
  build(model: string): Car {
    return new Car("Ferrari", model);
  }
}
