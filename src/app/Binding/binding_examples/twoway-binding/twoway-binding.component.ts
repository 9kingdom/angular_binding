import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: []
})
export class TwowayBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class TwowayBindingComponent implements OnInit {

    bindingType = 'Two Way Binding';
    public name = '';

    constructor( private commonService: CommonService ) { }

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

  html = `
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
            Start typing => Value from input field will be copied to variable &quot;name&quot; and
            another DOM element will be automatically updated with that value
          </p>
        </td>
        <td class="col" scope="row">
          <h5>{{ '{{' }} name {{ '}' }}{{ '}' }}</h5>
          <h5>{{ name }}</h5>
        </td>
        <td class="col" scope="row">
          <h5>[(ngModel)] = "name"</h5>
        </td>
      </tr>
    </tbody>
  </table>`;

  bindingType = 'Two Way Binding';
  public name = '';

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
