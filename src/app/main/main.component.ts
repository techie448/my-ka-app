import { Component, OnInit } from '@angular/core';
import * as data from './../data.json';
import {Customer} from './../customer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  customers: Customer[];
  constructor() { }

  ngOnInit(): void {
    this.customers = data.customers.map(customer => {
      return customer;
    });
  }
}
