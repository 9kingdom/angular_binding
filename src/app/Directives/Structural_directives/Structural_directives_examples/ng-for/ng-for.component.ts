import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  heros = [
    { mark: 'A', name: 'Superman', superpower: 'fly' },
    { mark: 'B', name: 'Batman', superpower: 'jump' },
    { mark: 'C', name: 'BatGirl', superpower: 'jump' },
    { mark: 'D', name: 'Robin', superpower: 'sing' },
  ];

  ngForCode1 = `
  TS:
  heros = [
    { mark: 'A', name: 'Superman', superpower: 'fly' },
    { mark: 'B', name: 'Batman', superpower: 'jump' },
    { mark: 'C', name: 'BatGirl', superpower: 'jump' },
    { mark: 'D', name: 'Robin', superpower: 'sing' },
  ];

  HTML:
  <tr *ngFor="let hero of heroes; let i = index">
  <td>{{hero.name}}</td>
  <td>{{i}}</td>
</tr>`;

  ngForCode2 = `<tr *ngFor="let hero of heroes; let even = even; let odd = odd"
[ngClass]="{ odd: odd, even: even }">
<td>{{hero.name}}</td>
</tr>
...CSS:
.even {
  background-color: cornflowerblue;
}
.odd {
  background-color: aquamarine;
}`;

  ngForCode3 = `<tr *ngFor="let hero of heroes; let first = first; let last = last"
  [ngClass]="{ first: first, last: last }">
  <td>{{hero.name}}</td>
</tr>
...CSS:
.first {
  font-style: italic;
  font-weight: bold;
 }
 .last {
  font-style: italic;
  font-weight: bold;
 }`;

  ngForCode4 = `trackById(listItems: any): string {
    return listItems.id;
  }`;

  ngForHtml = `<tr *ngFor="let item of listItems; trackBy: trackById">`;

  constructor() { }

  ngOnInit() {

  }
}
