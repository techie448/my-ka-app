import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  @Input()
  customers;

  constructor() { }

  ngOnInit(): void {
  }

}
