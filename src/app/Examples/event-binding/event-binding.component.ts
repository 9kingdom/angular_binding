import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>
        <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
        <button (click) = "runMethod()">Pokaż/ukryj komunikat</button>
        <span [hidden] = "dispMessage"> Pojawiam się i znikam</span>
    </div>
    <div style="text-align:center">
        <input #inputField value='jakaś wartość'>
        <button (click) = "passValue($event, inputField)">Pokaż "event type" i wyświetl wartość pola input</button>
        <h2>wartość pola input => {{ inputValue }} </h2>
        <h2>event type => {{ eventType }} </h2>
    </div>
    <div style="text-align:center">
        <button (click) = "templateStatement = 'Halo Halo'">Przykład "template statement"</button>
        <h2>template statement => {{ templateStatement }} </h2>
    </div>

  `,
  styles: [``]
})
export class EventBindingComponent implements OnInit {

  public bindingType = 'event binding';
  public dispMessage = true;
  public eventType: string;
  public inputValue = '';
  public templateStatement;

  constructor() { }

  ngOnInit() {
  }

  runMethod() {
    this.dispMessage = !this.dispMessage;
  }

  passValue(event, inputValue) {
    this.eventType = event.type;
    this.inputValue = inputValue.value;
  }

}
