// TS: Classes

// Blueprint to create an object with some fields (values) ad methods (functios) to represent a 'thing'

//  Below Vehicle would be considered the super or parent class
class Vehicle{
  // drive(): void {
  //   console.log('chugga chugga')
  // }

  protected honk = (): void => {
    console.log('honk')
  }

}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom')
  }

  startDriving(): void {
    this.drive()
    this.honk()
  }
}

// const car = new Car()
// car.startDriving()

// Modifiers: Public, Private, and Protected
// Public: Can be called any where, any time
// Private: This method can only be called by other methods in this class
// Protected: This method can be called by other methods in this class, or by other methods in child classes

// Mark private so that we can restrict what methods other developers call.
// Mark protected so that methods or functions can only be used within classes and sub classes

class Food { 

  // This modifier will allow us to create an instance variable of color.
  constructor(public color: string){}

  protected drinking(): void{
    console.log("gulp gulp")
  }
}
const food1 = new Food("red")
console.log(food1.color)

class Person extends Food{
  
  constructor(public name: string, color: string){
    super(color)
  }

  private eating(): void {
    console.log("YUM")
  }

  startEatingProcess(): void{
    this.eating()
    this.drinking()
  }
}

const person = new Person("James", "Blue")
console.log(person)
person.color
person.startEatingProcess()