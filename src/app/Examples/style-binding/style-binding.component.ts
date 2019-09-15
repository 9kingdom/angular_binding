import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
      <h2 [style.color]="'blue'">This is example of css 'color' style binding.</h2>
       <h2 [style.color]="isSpecial ? 'green' : 'orange'">This is example of conditional css 'color' style binding.</h2>
       <h2 [style.color]="highlightColor">This is example of css 'color' style binding by variable.</h2>
       <h2 [ngStyle]="titleStyles">This is example of css multi style binding by variable.</h2>
    </div>
  `,
  styles: [``]
})
export class StyleBindingComponent implements OnInit {

  bindingType = 'style binding';

  public isSpecial = false;
  public highlightColor = 'brown';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

}
