import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: []
})
export class EventBindingComponent implements OnInit {
  public bindingType = 'event binding';
  public dispMessage = true;
  public eventType: string;
  public inputValue = '';
  public templateStatement;

  constructor() {}

  ngOnInit() {}

  runMethod() {
    this.dispMessage = !this.dispMessage;
  }

  passValue(event, inputField) {
    this.eventType = event.type;
    this.inputValue = inputField.value;
  }
}
