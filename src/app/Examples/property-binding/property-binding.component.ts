import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
      <input [id] = "myId" type='text' value='Robert'>
      <input id = "{{ testID }}" type='text' value='Robert'>
      <input [disabled]="flag" id = "{{ testID }}" type='text' value='Robert'>
      <input disabled="{{ flag }}" id = "{{ testID }}" type='text' value='Robert'>
    </div>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  bindingType = 'Property binding';
  myId = 'testID';
  flag = true;

  constructor() { }

  ngOnInit() {
  }

}
