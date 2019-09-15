import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
      <h2 class="text-success">This is sample text.</h2>
      <h2 [class]="successClass">This is class binding</h2>
      <h2 class="text-special" [class]="successClass">Tylko class binding będzie zastosowane</h2>
      <h2 [class.text-danger]="hasError">Przypisanie stylu do klasy po spełnieniu warunku.</h2>
      <h2 [ngClass]="messageClass">Użycie ngClass.</h2>
    </div>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
    `
  ]
})
export class ClassBindingComponent implements OnInit {

  bindingType = 'class binding';

  public successClass = 'text-success';
  public textSpecial = 'text-special';
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

}
