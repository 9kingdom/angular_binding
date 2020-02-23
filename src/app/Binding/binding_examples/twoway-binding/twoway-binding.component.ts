import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';
import { TwowayChildComponent } from './twoway-child/twoway-child.component';

@Component( {
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: []
} )
export class TwowayBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class TwowayBindingComponent implements OnInit {

  bindingType = 'Two Way Binding';
  public name = '';
  amount: number = 500;

  constructor( private commonService: CommonService ) { }

  addBalance() {
    this.amount += 10;
  }

  ngOnInit() {
    this.codeData.setClassTitle( this.bindingType );
  }

  showClass() {
    this.codeData.setCode( this.code );
    this.commonService.code.next( this.codeData );
  }

  showHtml() {
    this.codeData.setCode( this.html );
    this.commonService.code.next( this.codeData );
  }
}`;

  html = `<div class="container-fluid" style="text-align:left">
  <div class="row">
    <div class="col">
      <h1 [style.color]="'red'">
        <strong>{{ bindingType }}</strong>
      </h1>
    </div>
    <div class="col">
      <button
        class="btn btn-info"
        (click)="showHtml()"
        style="float: right; margin-left: 2px;"
        data-toggle="modal"
        data-target="#classModal"
      >
        Show HTML
      </button>
      <button
        class="btn btn-info"
        (click)="showClass()"
        style="float: right;"
        data-toggle="modal"
        data-target="#classModal"
      >
        Show class
      </button>
    </div>
  </div>
  <table class="table table-striped container-fluid">
    <thead>
      <tr class="row">
        <th class="col" scope="row">
          <h3><strong>Example</strong></h3>
        </th>
        <th class="col" scope="row">
          <h3><strong>Variable 'name'</strong></h3>
        </th>
        <th class="col" scope="row">
          <h3><strong>Syntax</strong></h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="row">
        <td class="col" scope="row">
          <input
            [(ngModel)]="name"
            type="text"
            class="form-control"
            data-toggle="tooltip"
            data-placement="top"
            title='[(ngModel)] = "name"'
          />
          <p>
            Start typing => Value from input field will be copied to variable <code>name</code> and
            another DOM element will be automatically updated with that value
          </p>
        </td>
        <td class="col" scope="row">
          <h5>
            <code>{{ '{{' }} name {{ '}' }}{{ '}' }}</code>
          </h5>
          <h5>{{ name }}</h5>
        </td>
        <td class="col" scope="row">
          <h5><code>[(ngModel)] = "name"</code></h5>
        </td>
      </tr>
      <tr class="row">
        <h4>
          <br />
          <p><strong>Two way binding between parent and child component</strong></p>
        </h4>
        <div class="alert alert-info">
          <div><strong>Problem:</strong></div>
          <div>
            Parent component holds <code>amount</code> variable which value can be increased or
            decreased. Addition is done in parent compnent while substraction in child component.
            Variable <code>amount</code> should holds common value for both components.
          </div>
        </div>
        <div>
          <div>Steps:</div>
          <ul>
            <li>
              add property binding to child component
              <div>
                Parent:
                <pre><code [highlight]="html2"></code></pre>
                Child:
                <pre><code [highlight] = "html3"></code></pre>
              </div>
            </li>
            <li>
              add <code>Input()</code> in Child class
              <div>
                <pre><code [highlight]="code2"></code></pre>
              </div>
            </li>
            <div>
              So far we are able to increase and decrease <code>amount</code> value but parent
              component does not know about any changes done in child component. In order to update
              <code>amount</code> in parent component we need to use <code>EventEmitter</code>
            </div>
            <li>
              add <code>Output()</code> and <code>EventEmitter</code> in child .ts. Final child
              class:
              <pre><code [highlight]="html4"></code></pre>
            </li>
            <li>
              modify parent html:
              <pre><code [highlight] = "html5"></code></pre>
              <div>Now, <code>amount</code> is common for both parent and child component.</div>
            </li>
            <li>
              <strong>Banana in the box</strong>
              <div>
                By modyfing above syntax we can use <strong>custom two-way binding:</strong>
              </div>
              <pre><code [highlight] = "html6"></code></pre>
            </li>
            <div class="alert alert-warning">
              The magic here is the suffix <strong>‘Change’</strong> in the event’s name
              <code><strong>amountChange</strong></code
              >. If the property binding name is <strong>‘x’</strong>, the event binding name should
              be exactly <strong>‘xChange’</strong>. Only then angular recognizes banana-in-a-box
              [()] syntax.
            </div>
          </ul>
        </div>
      </tr>
      <h4><strong>Result:</strong></h4>
      <tr class="row">
        <td class="col" scope="row">
          <button
            class="btn btn-outline-secondary"
            style="margin-right: 2px;"
            type="button"
            (click)="addBalance()"
            data-placement="top"
            title='[(ngModel)] = "name"'
          >
            (parent) add +10
          </button>
          <app-twoway-child [(amount)]="amount"></app-twoway-child>
        </td>
        <td class="col" scope="row">
          <h5>Amount: {{ amount }}</h5>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<app-modal></app-modal>
`;

  html2 = `  ...
  <app-twoway-child [amount]="amount"></app-twoway-child>
  ...`;
  html3 = `<button
  class="btn btn-outline-secondary" type="button" (click)="subAmount()"
  data-placement="top" title='[(ngModel)] = "name"'>(child) subtr. -10</button>`;

  html4 = `export class TwowayChildComponent implements OnInit {

  @Input() amount: number;
  @Output() amountChange = new EventEmitter();
    ...
  subAmount() {
    this.amount -= 10;
    this.amountChange.emit( this.amount );
  }
}`;

  html5 = `<app-twoway-child [amount]="amount" (amountChange)="this.amount= $event"</app-twoway-child>`;

  html6 = `<app-twoway-child [(amount)]="amount"</app-twoway-child>`;

  code2 = `export class TwowayChildComponent implements OnInit {
  @Input() amount: number;
  ...
  subAmount() {
    this.amount -= 10;
  }
}`;

  bindingType = 'Two Way Binding';
  public name = '';
  amount: number = 500;

  constructor( private commonService: CommonService ) { }

  addBalance() {
    this.amount += 10;
  }

  ngOnInit() {
    this.codeData.setClassTitle( this.bindingType );
  }

  showClass() {
    this.codeData.setCode( this.code );
    this.commonService.code.next( this.codeData );
  }

  showHtml() {
    this.codeData.setCode( this.html );
    this.commonService.code.next( this.codeData );
  }
}
