import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
		<h1>
		<font color="red">This is {{ bindingType }}</font>
		</h1>

		<div style="text-align:center" *ngFor="let color of colors; index as i">
      <h2>{{ i+1 }}. {{ color }}</h2>
    </div>

    <h2 style="text-align:center">**************</h2>
    
    <div style="text-align:center" *ngFor="let color of colors; first as f">
      <h2>{{ f }} - {{ color }}</h2>
		</div>

	`,
  styles: []
})
export class NgForComponent implements OnInit {

  public bindingType = 'ngFor';
  public colors = ['red', 'green', 'blue', 'yellow'];

  constructor() { }

  ngOnInit() {
  }

}
