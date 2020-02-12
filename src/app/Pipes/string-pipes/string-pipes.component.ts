import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-string-pipes',
  templateUrl: './string-pipes.component.html',
  styleUrls: ['./string-pipes.component.css']
})
export class StringPipesComponent implements OnInit {

  bindingType = 'Pipes';
  public name = 'Robert';
  public message = 'This is camel case example';
  public personObj = {
    firstName: 'Sara',
    lastName: 'Krupicka'
  };
  // public date = new Date();

  codeData: ModalData = new ModalData();

  personObjectCode = `personObj={
    firstName: 'Sara',
    lastName: 'Krupicka'
  };`;

  personObjectCode2 = `  {
    firstName: 'Sara',
    lastName: 'Krupicka'
  };`;

  code = ``;

  html = ``;

  constructor( private commonService: CommonService ) { }

  ngOnInit() {
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
