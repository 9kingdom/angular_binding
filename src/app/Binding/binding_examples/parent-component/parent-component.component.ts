import { Component, OnInit, ViewChild } from '@angular/core';
import { InputOutputComponent } from '../input-output/input-output.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent implements OnInit {
  parentCode = `
  export class ParentComponent implements OnInit {
    fromParent = 'from parent';

    varToSentBackValueToChild = '';

    constructor() {}

    ngOnInit() {}

    recivedItem(fromChild: string) {
      this.varToSentBackValueToChild = fromChild;
    }
}`;

  parentHtml = `
  <app-input-output
    [childReciver]="fromParent"
    [childReciver2]="varToSentBackValueToChild"
    (fromChild)="recivedItem($event)">
  </app-input-output>
`;

  fromParent = 'from parent';

  varToSentBackValueToChild = '';

  @ViewChild(InputOutputComponent, { static: true }) inputOutputComp: InputOutputComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputOutputComp);
  }

  recivedItem(fromChild: string) {
    this.varToSentBackValueToChild = fromChild;
  }
}
