import {RO} from './RO';

export class Car {
  id: string;
  VIN: string;
  model: string;
  make: string;
  year: number;
  plate: string;
  color: string;
  mileage: string;
  ROs: Array<RO>;
}
