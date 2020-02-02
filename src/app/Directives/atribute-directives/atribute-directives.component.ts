import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute-directives',
  templateUrl: './atribute-directives.component.html',
  styleUrls: ['./atribute-directives.component.css']
})
export class AtributeDirectivesComponent implements OnInit {
  bindingType = 'Built-in attribute directives';
  ngClassCodeHtml = `<!-- toggle the "special" class on/off with a property -->
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>`;

  ngClassCodeTs = `currentClasses: {};
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}`;

  ngClassCodeHtml2 = `<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>`;

  ngStyleCodeHtml = `<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
  This div is x-large or smaller.
</div>`;

  ngStyleCodeTs = `currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}`;
  ngStyleCodeHtml2 = `<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>`;

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

  constructor() {}

  ngOnInit() {}
}
