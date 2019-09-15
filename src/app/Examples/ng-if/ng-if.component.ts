import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>

    <div style="text-align:center">
        <h2 *ngIf="true">Przykład ngIf</h2>
        <h2 *ngIf="displayName">Kolejny przykład ngIf tym razem ze zmienną typu 'boolean'</h2>
    </div>
    <div style="text-align:center">
        <h2 *ngIf="displayName2; else elseBlock">Przykład ngIf z użyciem 'else'</h2>
        <ng-template #elseBlock>
          <h2>Ten tekst jest wyświetlany jeżeli 'displayName2'= false (sekcja 'else')</h2>
        </ng-template>
    </div>
    <div style="text-align:center">
      <div *ngIf="displayName3; then thenBlock; else elseBlock2"></div>
      <ng-template #thenBlock>
        <h2>Rozwinięcie zastosowania 'ng-template'</h2>
      </ng-template>
      <ng-template #elseBlock2>
         <h2>Rozwinięcie 'else' => displayName3=false</h2>
      </ng-template>
    </div>
  `,
  styles: []
})
export class NgIfComponent implements OnInit {

  bindingType = 'ngIf directive';
  displayName = true;
  displayName2 = false;
  displayName3 = true;

  constructor() { }

  ngOnInit() {
  }

}
