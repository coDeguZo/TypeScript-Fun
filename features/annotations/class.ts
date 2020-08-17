// TS: Classes

// Blueprint to create an object with some fields (values) ad methods (functios) to represent a 'thing'

//  Below Vehicle would be considered the super or parent class
class Vehicle{
  drive(): void {
    console.log('chugga chugga')
  }

  honk = (): void => {
    console.log('honk')
  }

}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom')
  }
}

// const car = new Car()
// car.drive()
// car.honk()

// Modifiers: Public, Private, and Protected
// Public: Can be called any where, any time
// Private: This method can only be called by other methods in this class
// Protected: This method can be called by other methods in this class, or by other methods in child classes

class Food {
  // eating(): void{
  //   console.log("Nom Nom Nom")
  // }

  drinking(): void{
    console.log("gulp gulp")
  }
}

class Person extends Food{
  private eating(): void {
    console.log("YUM")
  }

  startEatingProcess(): void{
    this.eating()
    this.drinking()
  }
  // Mark private so that we can restrict what methods other developers call.
}

const person = new Person()
person.startEatingProcess()
person.drinking()