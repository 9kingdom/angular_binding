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
    // {mark: 'E', name: 'Flash', superpower: 'run'},
    // {mark: 'F', name: 'Pinokio', superpower: 'lie'},
    // {mark: 'G', name: 'Bolek', superpower: 'none'},
    // {mark: 'H', name: 'Lolek', superpower: 'none'}
  ];

  ngForCode1 = `<tr *ngFor="let hero of heroes; let i = index">
  <td>{{hero.name}}</td>
  <td>{{i}}</td>
</tr>`;

  ngForCode2 = `<tr *ngFor="let hero of heroes; let even = even; let odd = odd"
[ngClass]="{ odd: odd, even: even }">
<td>{{hero.name}}</td>
</tr>`;

  constructor() { }

  ngOnInit() {

  }
}
