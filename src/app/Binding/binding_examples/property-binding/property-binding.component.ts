import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: []
})
export class PropertyBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class PropertyBindingComponent implements OnInit {
    bindingType = 'Property binding';
    myId = 'testId';
    flag = true;

    constructor() {}

    ngOnInit() {}
  }
`;

  html = `
  <table class="table table-striped">
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
        <td>
          <input [id]="myId" type="text" value="Robert" class="form-control col-6" />
        </td>
        <td>
          <h5>[id]="myId" type='text' value='Robert'</h5>
        </td>
      </tr>
      <tr>
        <td>
          <input id="{{ myId }}" type="text" value="Robert" class="form-control col-6" />
        </td>
        <td>
          <h5>id=" {{ '{{' }} myId {{ '}' }}{{ '}' }} " type='text' value='Robert'</h5>
        </td>
      </tr>
      <tr>
        <td>
          <input
            [disabled]="flag"
            id="{{ myId }}"
            type="text"
            value="Robert"
            class="form-control col-6"
          />
        </td>
        <td>
          <h5>
            [disabled]="flag" id="{{ '{{' }} myId {{ '}' }}{{ '}' }}" type='text' value='Robert'
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <input
            disabled="{{ flag }}"
            id="{{ myId }}"
            type="text"
            value="Robert"
            class="form-control col-6"
          />
        </td>
        <td>
          <h5>
            disabled="{{ '{{' }} flag {{ '}' }}{{ '}' }}" id="{{ '{{' }} myId {{ '}' }}{{ '}' }}"
            type='text' value='Robert'
          </h5>
        </td>
      </tr>
    </tbody>
  </table>`;

  bindingType = 'Property binding';
  myId = 'testId';
  flag = true;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.codeData.setClassTitle(this.bindingType);
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
