```mermaid
classDiagram
    note "Builder"
    class Car {
        constructor(String manufacturer, String model)
        -String manufacturer
        -String model
    }
    
    class CarFactory {
        +build(String model) Car
    }
```