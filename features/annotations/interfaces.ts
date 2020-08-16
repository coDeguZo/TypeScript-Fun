// TS: Interfaces

// Create a new type, describing the property names
// and value types of an object

// Whenever we create an Interface, we are creating a new TYPE!
// Always use a capitol letter

interface Vehicle {
  name: string;
  year: number;
  manufactured: Date;
  broken: boolean;
  summary(): string;
}
// OldCivic can be passed into the function below because it meets the
// type
const oldCivic = {
  name: 'civic',
  year: 2000,
  manufactured: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// Placing a the new interface that is the type; type annotation!
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Manufactured ${vehicle.manufactured}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// printVehicle(oldCivic);


interface Model {
  color: string
}

const porche = {
  color: "Purple",
  year: 1920,
  fast: false
}

const usedCars = (vehicle: Model): void => {
  console.log(vehicle.color)
}

usedCars(porche)


// ------------------ Quiz

// The goal of an interface is to: Define a new Type