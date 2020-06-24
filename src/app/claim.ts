import {Supplement} from './supplement';

export class Claim {
  id: string;
  insCompany: string;
  insAppraiser: string;
  insAppraiserPhone: number;
  insAppraiserEmail: string;
  insAdjuster: string;
  insAdjusterPhone: number;
  insAdjusterEmail: string;
  claimNum: string;
  originalAmount: number;
}
