import { Mappable } from './CustomMap'

// Need Type definition file. Kinda like an 
// adapter.
import faker from 'faker'

// We exported Mappable and want the User class
// to be type Mappable.
export class User implements Mappable {
  // constructor(public name: string, public location: {lat: number, lng: number} ){
  // }
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red'

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}