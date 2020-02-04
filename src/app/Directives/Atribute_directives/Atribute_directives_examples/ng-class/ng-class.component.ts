import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  ngClassCodeHtml = `<!-- toggle the "special" class on/off with a property -->
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>`;

  ngClassCodeTs = `currentClasses: {};
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}`;

  ngClassCodeHtml2 = `<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>`;
  constructor() { }

  ngOnInit() {
  }

}
