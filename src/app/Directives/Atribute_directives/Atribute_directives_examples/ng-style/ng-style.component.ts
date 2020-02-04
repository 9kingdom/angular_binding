import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  ngStyleCodeHtml = `<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
  This div is x-large or smaller.
</div>`;

  ngStyleCodeTs = `currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}`;
  ngStyleCodeHtml2 = `<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
