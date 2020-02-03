import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ModalData } from 'src/app/modal-data';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  codeData: ModalData = new ModalData();
  code = `
  export class ClassBindingComponent implements OnInit {
    bindingType = 'Class binding';

    public successClass = 'text-success';
    public textSpecial = 'text-special';
    public hasError = true;
    public hideStyles = true;
    public hideClass = true;
    public isSpecial = true;
    public messageClass = {
      'text-success': !this.hasError,
      'text-danger': this.hasError,
      'text-special': this.isSpecial
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
          <h4 class="text-success">This is sample text - no databinding</h4>
        </td>
        <td>
          <h5>class="text-success"</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [class]="successClass">This is class binding</h4>
        </td>
        <td>
          <h5>
            [class]="successClass" : wartość zmiennej 'successClass' zostanie przypisana do 'class'
            => class="text-success"
          </h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 class="text-special" [class]="successClass">
            class="text-special" zostanie nadpisane przez 'class binding'
          </h4>
        </td>
        <td>
          <h5>class="text-special" <strong>[class]="successClass"</strong></h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [class.text-danger]="hasError">Przypisanie klasy po spełnieniu warunku.</h4>
        </td>
        <td>
          <h5>[class.text-danger]="hasError"</h5>
        </td>
      </tr>
      <tr>
        <td scope="row">
          <h4 [ngClass]="messageClass">Użycie ngClass.</h4>
        </td>
        <td>
          <h5>
            [ngClass]="messageClass"
            <strong>Uwaga: to nie jest to samo co [class]="messageClass"</strong><br />
            <span
              >Dzięki 'ngClass' możemy zastosowac kilka klas jednocześnie (zobacz deklaracje
              'messageClass')</span
            >
          </h5>
        </td>
      </tr>
    </tbody>
  </table>`;

  bindingType = 'Class binding';

  public successClass = 'text-success';
  public textSpecial = 'text-special';
  public hasError = true;
  public hideStyles = true;
  public hideClass = true;
  public isSpecial = true;
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
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
