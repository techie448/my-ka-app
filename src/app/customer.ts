import {Car} from './car';

export class Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  cars: Array<Car>;
}
