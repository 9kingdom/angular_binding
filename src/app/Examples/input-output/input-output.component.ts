import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styles: []
})
export class InputOutputComponent implements OnInit {
  codeData: ModalData = new ModalData();

  code = `
  export class InputOutputComponent implements OnInit {

  @Input() public childReciver: string;
  @Input() public childReciver2: string;

  @Output() public fromChild = new EventEmitter<string>();

  inputSwitch = true;
  outputSwitch = true;

  constructor() {}

  ngOnInit() {}

  input() {
    this.inputSwitch = !this.inputSwitch;
  }

  output(inputFieldValue: string) {
    this.fromChild.emit(inputFieldValue);
    this.outputSwitch = !this.outputSwitch;
  }
}`;

  html = `<table class="table table-striped container-fluid">
    <thead>
      <tr class="row">
        <th class="col-2" scope="row">
          <h3><strong>Example</strong></h3>
        </th>
        <th class="col-4" scope="row">
          <h3><strong>Message</strong></h3>
        </th>
        <th class="col-6" scope="row">
          <h3><strong>Syntax</strong></h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="row">
        <td class="col-2" scope="row">
          <h5><strong>@Input</strong></h5>
          <button type="button" class="btn btn-outline-secondary" (click)="input()">
            Click me
          </button>
        </td>
        <td class="col-4" scope="row">
          <h5 [hidden]="inputSwitch">
            <strong>@Input: {{ childReciver }}</strong>
          </h5>
        </td>
        <td class="col-6" scope="row">
          <h5>Parent component:</h5>
          <h6>
            .ts:
            <pre><code [highlight]="parentTsCode"></code></pre>
            .html:
            <pre><code [highlight]="parentHtmlCode"></code></pre>
          </h6>
          <h5>Child component:</h5>
          <h6>
            .ts:
            <pre><code [highlight]="childTsCode"></code></pre>
            .html:
            <pre><code [highlight]="childHtmlCode"></code></pre>
          </h6>
        </td>
      </tr>
      <tr class="row">
        <td class="col-2" scope="row">
          <h5><strong>@Output</strong></h5>
          <button class="btn btn-outline-secondary" (click)="output(inputField.value)" style="margin-bottom: 2px;">
            Click me
          </button>
          <input
            #inputField
            value="tratata"
            type="text"
            class="form-control"
          />
        </td>
        <td class="col-4" scope="row">
          <h5 [hidden]="outputSwitch">
            <strong>@Output: {{ childReciver2 }}</strong>
          </h5>
        </td>
        <td class="col-6" scope="row">
          <h5>Child component:</h5>
          <h6>
            .html:
            <pre><code [highlight]="childOutputHtmlCode"></code></pre>
            .ts:
            <pre><code [highlight]="childOutputTsCode"></code></pre>
          </h6>
          <h5>Parent component:</h5>
          <h6>
            .html:
            <pre><code [highlight]="parentOutputHtmlCode"></code></pre>
            .ts:
            <pre><code [highlight]="parentOutputTsCode"></code></pre>
          </h6>
        </td>
      </tr>
    </tbody>
  </table>`;

  bindingType = '@Input / @Output';
  syntax = `    <parent-component>
      <child-component></child-component>
    </parent-component>`;

  parentHtmlCode = `<app-input-output [childReciver]="fromParent"></app-input-output>`;
  parentTsCode = `fromParent = 'from parent to child';`;
  childTsCode = `@Input() public childReciver: string;`;
  childHtmlCode = `<h5 [hidden]="switch"><strong>@Input:{{ childReciver }}</strong></h5>`;

  childOutputTsCode = `  @Output() public fromChild = new EventEmitter<string>();
  ...
  output(inputFieldValue: string) {
    this.fromChild.emit(inputFieldValue);
  }`;
  childOutputHtmlCode = `  <button (click)="output(inputField.value)"></button>
  ...
  <input #inputField>`;
  parentOutputHtmlCode = ` <app-input-output (fromChild)="recivedItem($event)"></app-input-output>`;
  parentOutputTsCode = `  recivedItem(fromChild: string) {
    this.varToSentBackValueToChild = fromChild;
  }`;

  @Input() public childReciver: string;
  @Input() public childReciver2: string;
  @Input() public parentHtml: string;
  @Input() public parentCode: string;

  @Output() public fromChild = new EventEmitter<string>();

  inputSwitch = true;
  outputSwitch = true;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.codeData.setClassTitle(this.bindingType);
  }

  input() {
    this.inputSwitch = !this.inputSwitch;
  }

  output(inputFieldValue: string) {
    this.fromChild.emit(inputFieldValue);
    this.outputSwitch = !this.outputSwitch;
  }

  showClass() {
    this.codeData.setCode(this.code);
    this.commonService.code.next(this.codeData);
  }

  showHtml() {
    this.codeData.setCode(this.html);
    this.commonService.code.next(this.codeData);
  }

  showClassParent() {
    this.codeData.setCode(this.parentCode);
    this.commonService.code.next(this.codeData);
  }

  showHtmlParent() {
    this.codeData.setCode(this.parentHtml);
    this.commonService.code.next(this.codeData);
  }
}
