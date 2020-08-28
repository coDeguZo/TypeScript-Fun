// Need Type definition file. Kinda like an 
// adapter.
import faker from 'faker'

export class User {
  // constructor(public name: string, public location: {lat: number, lng: number} ){
    
  // }
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}