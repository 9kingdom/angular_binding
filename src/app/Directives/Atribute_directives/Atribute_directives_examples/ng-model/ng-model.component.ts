import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  ngModelCodeHtml = `<label for="example-ngModel">[(ngModel)]:</label>
<input [(ngModel)]="currentItem.name" id="example-ngModel">`;

  ngModelCodeImport = `import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
/* . . . */
@NgModule({
/* . . . */

  imports: [
    BrowserModule,
    FormsModule // <--- import into the NgModule
  ],
/* . . . */
})
export class AppModule { }`;

  constructor() { }

  ngOnInit() {
  }

}
