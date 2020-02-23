import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-twoway-child',
  templateUrl: './twoway-child.component.html',
  styleUrls: [ './twoway-child.component.css' ]
} )
export class TwowayChildComponent implements OnInit {

  @Input() amount: number;
  @Output() amountChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  subAmount() {
    this.amount -= 10;
    this.amountChange.emit( this.amount );
  }

}
