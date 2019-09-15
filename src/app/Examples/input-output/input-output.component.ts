import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  template: `
		<h1>
		<font color="red">This is {{ bindingType }}</font>
		</h1>

		<div style="text-align:center">
        <h2>Moje imię <{{ parentData }}> zostało przekazane z app.component</h2>
    </div>
    <div style="text-align:center">
        <button (click) = "emit()">Click to emit</button>
        <h2>{{ emitMessage }}</h2>
    </div>

	`,
  styles: []
})
export class InputOutputComponent implements OnInit {

  bindingType = '@Input / @Output';
  emitMessage = '';
  @Input() public parentData: string;

  @Output() public fromChildEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.fromChildEvent.emit('This was emitted from child component');
    this.emitMessage = 'Emit message has been emitted :)';
  }
}
