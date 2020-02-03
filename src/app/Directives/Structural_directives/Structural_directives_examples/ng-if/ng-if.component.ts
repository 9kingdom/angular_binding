import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  codeNgIfHtml1 = `<div *ngIf="condition">Content to render when condition is true.</div>`;
  codeNgIfHtml2 = `<<div *ngIf="condition; then thenBlock else elseBlock"></div>
  <ng-template #thenBlock>Content to render when condition is true.</ng-template>
  <ng-template #elseBlock>Content to render when condition is false.</ng-template>`;
  codeNgIfHtml3 = `@Component({
    selector: 'ng-if-then-else',
    template: '
      <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
      <button (click)="switchPrimary()">Switch Primary</button>
      show = {{show}}
      <br>
      <div *ngIf="show; then thenBlock; else elseBlock">this is ignored</div>
      <ng-template #primaryBlock>Primary text to show</ng-template>
      <ng-template #secondaryBlock>Secondary text to show</ng-template>
      <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
    '
  })
  export class NgIfThenElse implements OnInit {

    thenBlock: TemplateRef<any>|null = null;
    show: boolean = true;

    @ViewChild('primaryBlock', {static: true})
    primaryBlock: TemplateRef<any>|null = null;
    @ViewChild('secondaryBlock', {static: true})
    secondaryBlock: TemplateRef<any>|null = null;

    switchPrimary() {
      this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
    }

    ngOnInit() { this.thenBlock = this.primaryBlock; }
  }`;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.name.next('ngIf');
  }
}
