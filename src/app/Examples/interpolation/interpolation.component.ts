import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
     <h2>
    This is another example => 2+2= {{ 2 + 2 }}
    </h2>

    <h2>
    This is another example => {{ "Welcome " + name}}
    <p>Ilość liter w "name": {{ name.length }} </p>
    <p>Przekształcenie "name" na UpperCase: {{ name.toUpperCase() }} </p>
    </h2>

    <h2>
    <button (click)='displayMsg()'>Click Me</button>
    <span [hidden]='flag' > Pojawiam się gdy atrybut [hidden] = {{ flag }}</span>
    </h2>

    <h2>
    This is site url: {{ siteURL }}
    </h2>
    </div>
  `,
  styles: []
})
export class InterpolationComponent {

  bindingType = 'interpolation';
  name = 'Robert';
  flag = true;
  siteURL = window.location.href;

  constructor() { }

  displayMsg() {
    this.flag = !this.flag;
  }
}
