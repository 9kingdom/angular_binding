import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { CommonService } from 'src/app/common.service';
import { ModalData } from 'src/app/modal-data';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: []
})
export class InterpolationComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class InterpolationComponent {
    bindingType = 'String interpolation';
    name = 'Robert';
    flag = true;
    siteURL = window.location.href;
    hideClass = false;

    constructor(private commonService: CommonService) {}

    displayMsg() {
      this.flag = !this.flag;
    }
  }
`;

  html = `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">
          <h3><strong>Example</strong></h3>
        </th>
        <th scope="col">
          <h3><strong>Syntax</strong></h3>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">
          <h4>2+2= {{ 2 + 2 }}</h4>
        </td>
        <td>
          <h5>2+2={{ '{{ ' }}2+2{{ ' }' }}{{ '}' }}</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4>{{ 'Welcome ' + name }}</h4>
        </td>
        <td>
          <h5>{{ '{{' }} "Welcome" + <strong>name</strong> {{ '}' }}{{ '}' }}</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4>Length of "name" variable: {{ name.length }}</h4>
        </td>
        <td>
          <h5>{{ '{{' }} <strong>name</strong>.length {{ '}' }}{{ '}' }}</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4>Convert "name" to UpperCase: {{ name.toUpperCase() }}</h4>
        </td>
        <td>
          <h5>{{ '{{' }} <strong>name</strong>.toUpperCase() {{ '}' }}{{ '}' }}</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h5>
            <button
              class="btn btn-outline-secondary"
              type="button"
              (click)="displayMsg()"
              data-toggle="tooltip"
              data-placement="top"
              title="Method: displayMsg() {{ '{' }} this.flag = !this.flag; {{ ' }' }}"
            >
              Click Me
            </button>
            <span [hidden]="flag"> Visible only when hidden=false</span>
          </h5>
        </td>
        <td>
          <h5>[hidden] = {{ '{{' }} <strong>flag</strong> {{ '}' }}{{ '}' }}</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4>
            site url: <span style="font-style: italic;">{{ siteURL }}</span>
          </h4>
        </td>
        <td>
          <h5>{{ '{{' }} <strong>siteURL</strong> {{ '}' }}{{ '}' }}</h5>
          <h5><strong>siteURL</strong>=window.location.href;</h5>
        </td>
      </tr>
    </tbody>
  </table>`;

  bindingType = 'String Interpolation';
  name = 'Robert';
  flag = true;
  siteURL = window.location.href;
  hideClass = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.codeData.setClassTitle(this.bindingType);
  }

  displayMsg() {
    this.flag = !this.flag;
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
