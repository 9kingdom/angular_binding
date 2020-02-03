import { Component, OnInit } from '@angular/core';
import { HighlightModule, HighlightResult } from 'ngx-highlightjs';
import { CommonService } from 'src/app/common.service';
import { ModalData } from 'src/app/modal-data';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class StyleBindingComponent implements OnInit {
    bindingType = 'style binding';

    public isSpecial = false;
    public highlightColor = 'brown';
    public hideClass = true;
    public titleStyles = {
      color: 'blue',
      fontStyle: 'italic'
    };

    constructor() {}

    ngOnInit() {}

    showClass() {
      this.hideClass = !this.hideClass;
    }
  }
`;

  html = `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">
          <h3><strong>Example</strong></h3>
        </th>
        <td scope="col">
          <h3><strong>Syntax</strong></h3>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">
          <h4 [style.color]="'blue'">Example of css 'color' style binding.</h4>
        </td>
        <td>
          <h5>[style.color]=" 'blue' "</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [style.color]="isSpecial ? 'green' : 'orange'">
            Example of conditional css 'color' style binding.
          </h4>
        </td>
        <td>
          <h5>[style.color]="isSpecial ? 'green' : 'orange'"</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [style.color]="highlightColor">
            Example of css 'color' style binding by variable.
          </h4>
        </td>
        <td>
          <h5>[style.color]="highlightColor"</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [ngStyle]="titleStyles">Example of css multi style binding by variable.</h4>
        </td>
        <td>
          <h5>
            <strong>[ngStyle]="titleStyles"</strong>
            <p style="margin-top:4px;">
              *ngStyle - use of more than one style at a time (see: 'titleStyles' declaration)
            </p>
          </h5>
        </td>
      </tr>
      <tr></tr>
    </tbody>
  </table>`;

  bindingType = 'Style Binding';

  public isSpecial = false;
  public highlightColor = 'brown';
  public hideClass = true;
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };

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
