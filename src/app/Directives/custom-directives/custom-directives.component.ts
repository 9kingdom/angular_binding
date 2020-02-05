import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {


    bindingType = 'Custom directives';
    customCode1 = `import { Directive } from '@angular/core';

    @Directive({
      selector: '[appExample]',
    })
    export class ExampleDirective {
      constructor() {}
    }`;

    customCode2 = `<button appExample>Button</button>`;

    constructor() {}

    ngOnInit() {}
  }

