import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-component",
  templateUrl: "./parent-component.component.html",
  styleUrls: ["./parent-component.component.css"]
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

  fromParent = "from parent";

  varToSentBackValueToChild = "";

  constructor() {}

  ngOnInit() {}

  recivedItem(fromChild: string) {
    this.varToSentBackValueToChild = fromChild;
  }
}
