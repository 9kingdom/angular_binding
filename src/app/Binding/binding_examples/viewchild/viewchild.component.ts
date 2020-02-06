import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  bindingType = '@ViewChild';

  viewChildCode1 = `@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
  export class ParentComponent {
    ...
    @ViewChild(ChildComponent, {static: true}) childComp: ChildComponent;
    ...
  }`;

  viewChidCode2 = `InputOutputComponent {commonService: CommonService, codeData: ModalData, code: "↵  export class InputOutputComponent implements On…    this.outputSwitch = !this.outputSwitch;↵  }↵}", html: "<table class="table table-striped container-fluid"…        </td>↵      </tr>↵    </tbody>↵  </table>", bindingType: "@Input / @Output", …}
  commonService: CommonService {code: Subject, name: Subject}
  codeData: ModalData {classTitle: "@Input / @Output"}
  code: "↵  export class InputOutputComponent implements OnInit {↵↵  @Input() public childReciver: string;↵  @Input() public childReciver2: string;↵↵  @Output() public fromChild = new EventEmitter<string>();↵↵  inputSwitch = true;↵  outputSwitch = true;↵↵  constructor() {}↵↵  ngOnInit() {}↵↵  input() {↵    this.inputSwitch = !this.inputSwitch;↵  }↵↵  output(inputFieldValue: string) {↵    this.fromChild.emit(inputFieldValue);↵    this.outputSwitch = !this.outputSwitch;↵  }↵}"
  html: "<table class="table table-striped container-fluid">↵    <thead>↵      <tr class="row">↵        <th class="col-2" scope="row">↵          <h3><strong>Example</strong></h3>↵        </th>↵        <th class="col-4" scope="row">↵          <h3><strong>Message</strong></h3>↵        </th>↵        <th class="col-6" scope="row">↵          <h3><strong>Syntax</strong></h3>↵        </th>↵      </tr>↵    </thead>↵    <tbody>↵      <tr class="row">↵        <td class="col-2" scope="row">↵          <h5><strong>@Input</strong></h5>↵          <button type="button" class="btn btn-outline-secondary" (click)="input()">↵            Click me↵          </button>↵        </td>↵        <td class="col-4" scope="row">↵          <h5 [hidden]="inputSwitch">↵            <strong>@Input: {{ childReciver }}</strong>↵          </h5>↵        </td>↵        <td class="col-6" scope="row">↵          <h5>Parent component:</h5>↵          <h6>↵            .ts:↵            <pre><code [highlight]="parentTsCode"></code></pre>↵            .html:↵            <pre><code [highlight]="parentHtmlCode"></code></pre>↵          </h6>↵          <h5>Child component:</h5>↵          <h6>↵            .ts:↵            <pre><code [highlight]="childTsCode"></code></pre>↵            .html:↵            <pre><code [highlight]="childHtmlCode"></code></pre>↵          </h6>↵        </td>↵      </tr>↵      <tr class="row">↵        <td class="col-2" scope="row">↵          <h5><strong>@Output</strong></h5>↵          <button class="btn btn-outline-secondary" (click)="output(inputField.value)" style="margin-bottom: 2px;">↵            Click me↵          </button>↵          <input↵            #inputField↵            value="tratata"↵            type="text"↵            class="form-control"↵          />↵        </td>↵        <td class="col-4" scope="row">↵          <h5 [hidden]="outputSwitch">↵            <strong>@Output: {{ childReciver2 }}</strong>↵          </h5>↵        </td>↵        <td class="col-6" scope="row">↵          <h5>Child component:</h5>↵          <h6>↵            .html:↵            <pre><code [highlight]="childOutputHtmlCode"></code></pre>↵            .ts:↵            <pre><code [highlight]="childOutputTsCode"></code></pre>↵          </h6>↵          <h5>Parent component:</h5>↵          <h6>↵            .html:↵            <pre><code [highlight]="parentOutputHtmlCode"></code></pre>↵            .ts:↵            <pre><code [highlight]="parentOutputTsCode"></code></pre>↵          </h6>↵        </td>↵      </tr>↵    </tbody>↵  </table>"
  bindingType: "@Input / @Output"
  syntax: "    <parent-component>↵      <child-component></child-component>↵    </parent-component>"
  parentHtmlCode: "<app-input-output [childReciver]="fromParent"></app-input-output>"
  parentTsCode: "fromParent = 'from parent to child';"
  childTsCode: "@Input() public childReciver: string;"
  childHtmlCode: "<h5 [hidden]="switch"><strong>@Input:{{ childReciver }}</strong></h5>"
  childOutputTsCode: "  @Output() public fromChild = new EventEmitter<string>();↵  ...↵  output(inputFieldValue: string) {↵    this.fromChild.emit(inputFieldValue);↵  }"
  childOutputHtmlCode: "  <button (click)="output(inputField.value)"></button>↵  ...↵  <input #inputField>"
  parentOutputHtmlCode: " <app-input-output (fromChild)="recivedItem($event)"></app-input-output>"
  parentOutputTsCode: "  recivedItem(fromChild: string) {↵    this.varToSentBackValueToChild = fromChild;↵  }"
  fromChild: EventEmitter {_isScalar: false, observers: Array(1), closed: false, isStopped: false, hasError: false, …}
  inputSwitch: true
  outputSwitch: true
  childReciver: "from parent"
  childReciver2: ""
  parentHtml: "↵  <app-input-output↵    [childReciver]="fromParent"↵    [childReciver2]="varToSentBackValueToChild"↵    (fromChild)="recivedItem($event)">↵  </app-input-output>↵"
  parentCode: "↵  export class ParentComponent implements OnInit {↵    fromParent = 'from parent';↵↵    varToSentBackValueToChild = '';↵↵    constructor() {}↵↵    ngOnInit() {}↵↵    recivedItem(fromChild: string) {↵      this.varToSentBackValueToChild = fromChild;↵    }↵}"
  __proto__: Object`;

  viewChildCode3 = `<div>
  <div #myTestDiv> <!--Template reference variable -->
    <h1>
      I am the heading
    </h1>
  </div>
  <button (click)="onButtonClick()">click me to hide heading</button>
</div>`;

  viewChildCode4 = `import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })
  export class Test implements OnInit {

  @ViewChild('myTestDiv') divElementRef:ElementRef;
  divElement: HTMLElement;

    constructor() { }

    ngOnInit() {
      this.divElement = this.divElementRef.nativeElement
    }

    onButtonClick(){
      // your logic to do some processing or get data from datasource
      // manipulate the div element based on a condition
      this.divElement.style.visibility != "hidden" ?   this.divElement.style.visibility = "hidden" : this.divElement.style.visibility = "visible";
    }
  }`;

  viewChildCode5 = `export class AppComponent implements AfterViewInit {
    @ViewChild('el') el: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit() {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '<h1>Hello world</h1>');
    }
  }`;

  viewChildCode6 = `<h2 #title>Choose Brand Colors:</h2>

  <color-sample [color]="primary" #primaryColorSample (click)="openColorPicker()">
  </color-sample>

  <mat-input-container>
    <mat-label>Primary Color</mat-label>
    <input matInput #primaryInput [(colorPicker)]="primary" [(ngModel)]="primary"/>
  </mat-input-container>`;

  viewChildCode7 = `@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
  })
  export class AppComponent {
    primary = '#1976d2';

    @ViewChild('primaryInput', {read: ColorPickerDirective}) colorPicker: ColorPickerDirective;

    openColorPicker() {
      this.colorPicker.openDialog();
    }
  }`;

  constructor() { }

  ngOnInit() {}
}
