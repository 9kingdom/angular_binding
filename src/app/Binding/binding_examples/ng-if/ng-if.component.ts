import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: []
})
export class NgIfComponent implements OnInit {
  bindingType = 'ngIf directive';
  displayName = true;
  displayName2 = false;

  constructor() {}

  ngOnInit() {}
  changeValue() {
    this.displayName2 = !this.displayName2;
  }
}
