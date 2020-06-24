import {Supplement} from './supplement';
import {Claim} from './claim';

export class RO {
  id: string;
  repairAmount: number;
  claims: Array<Claim>;
  supplements: Array<Supplement>;
}
