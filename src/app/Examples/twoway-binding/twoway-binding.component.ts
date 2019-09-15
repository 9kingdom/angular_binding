import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <h1>
        <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
    <input [(ngModel)] = "name" type="text"> {{ name }}

    </div>

  `,
  styles: [``]
})
export class TwowayBindingComponent implements OnInit {

  bindingType = 'Two Way Binding';
  public name = '';

  constructor() { }

  ngOnInit() {
  }

}
