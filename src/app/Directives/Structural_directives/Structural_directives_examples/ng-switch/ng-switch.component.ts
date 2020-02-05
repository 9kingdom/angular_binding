import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  ngSwitchCode1 = `<container-element [ngSwitch]="switch_expression">`;

  ngSwitchCode2 = `
  <div [ngSwitch]="hero?.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="hero"></app-confused-hero>
  <ng-container *ngSwitchCase="angry">
    <!-- use a ng-container to group multiple root nodes -->
    <app-very-angry></app-very-angry>
    <app-little-angry></app-little-angry>
  </ng-container>
  <app-unknown-hero  *ngSwitchDefault           [hero]="hero"></app-unknown-hero>
  </div>`;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.name.next('ngSwitch');
  }
}
