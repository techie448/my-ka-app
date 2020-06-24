import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
