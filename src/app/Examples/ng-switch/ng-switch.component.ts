import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-switch',
	template: `
		<h1>
		<font color="red">This is {{ bindingType }}</font>
		</h1>

		<div [ngSwitch]="color" style="text-align:center">
        <div *ngSwitchCase="'red'">
            <h2>You picked red color</h2>
        </div>
        <div *ngSwitchCase="'green'">
            <h2>You picked green color</h2>
        </div>
        <div *ngSwitchCase="'blue'">
            <h2>You picked blue color</h2>
        </div>
        <div *ngSwitchDefault>
            <h2>This is default if wrong color was picked</h2>
        </div>
		</div>

	`,
	styles: []
})
export class NgSwitchComponent implements OnInit {

	public bindingType = 'ngSwitch';
	public color = 'ssss';

	constructor() { }

	ngOnInit() {
	}

}
