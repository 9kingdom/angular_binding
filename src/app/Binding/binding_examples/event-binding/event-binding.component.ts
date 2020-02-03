import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: []
})
export class EventBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class EventBindingComponent implements OnInit {
    public bindingType = 'Event binding';
    public dispMessage = true;
    public eventType: string;
    public inputValue = '';
    public templateStatement;

    constructor(private commonService: CommonService) {}

    ngOnInit() {
      this.codeData.setClassTitle(this.bindingType);
    }

    runMethod() {
      this.dispMessage = !this.dispMessage;
    }

    passValue(event, inputField) {
      this.eventType = event.type;
      this.inputValue = inputField.value;
    }

    showClass() {
      this.codeData.setCode(this.code);
      this.commonService.code.next(this.codeData);
    }

    showHtml() {
      this.codeData.setCode(this.html);
      this.commonService.code.next(this.codeData);
    }
  }`;

  html = `
  <table class="table table-striped container-fluid">
    <thead>
      <tr class="row">
        <th class="col" scope="row">
          <h3><strong>Example</strong></h3>
        </th>
        <th class="col" scope="row">
          <h3><strong>Message</strong></h3>
        </th>
        <th class="col" scope="row">
          <h3><strong>Syntax</strong></h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="row">
        <td class="col" scope="row">
          <button type="button" class="btn btn-outline-secondary" (click)="runMethod()">
            Click me
          </button>
        </td>
        <td class="col" scope="row">
          <div [hidden]="dispMessage" style="text-align:left">
            <h5><strong>Show me with a click</strong></h5>
          </div>
        </td>
        <td class="col" scope="row">
          <h5>(click) = "runMethod()" => <br />[hidden] = "dispMessage"</h5>
        </td>
      </tr>
      <tr class="row">
        <td class="col align-middle" scope="row">
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Show 'event type' & input filed value => (click) = passValue($event, inputField)"
                (click)="passValue($event, inputField)"
              >
                Click me
              </button>
            </div>
            <input
              #inputField
              value="tratata"
              type="text"
              class="form-control"
              data-toggle="tooltip"
              data-placement="top"
              title="#inputField value='tratata'"
            />
          </div>
        </td>
        <td class="col" scope="row">
          <h5>Input field value => {{ inputValue }}</h5>
          <h5>event type => {{ eventType }}</h5>
        </td>
        <td class="col" scope="row">
          <h5>
            (click)="passValue($event, inputField)"
          </h5>
        </td>
      </tr>
      <tr class="row">
        <td class="col" scope="row">
          <button
            class="btn btn-outline-secondary"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Example of 'templateStatement' => (click) = &quot;templateStatement='Halo Halo'&quot; "
            (click)="templateStatement = 'Halo Halo'"
          >
            Click me
          </button>
        </td>
        <td class="col" scope="row">
          <h5>templateStatement => {{ templateStatement }}</h5>
        </td>
        <td class="col" scope="row">
          <h5>(click) = &quot;templateStatement='Halo Halo'&quot;</h5>
        </td>
      </tr>
    </tbody>
  </table>`;

  public bindingType = 'Event binding';
  public dispMessage = true;
  public eventType: string;
  public inputValue = '';
  public templateStatement;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.codeData.setClassTitle(this.bindingType);
  }

  runMethod() {
    this.dispMessage = !this.dispMessage;
  }

  passValue(event, inputField) {
    this.eventType = event.type;
    this.inputValue = inputField.value;
  }

  showClass() {
    this.codeData.setCode(this.code);
    this.commonService.code.next(this.codeData);
  }

  showHtml() {
    this.codeData.setCode(this.html);
    this.commonService.code.next(this.codeData);
  }
}
