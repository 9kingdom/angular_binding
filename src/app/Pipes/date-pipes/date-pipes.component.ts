import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-date-pipes',
  templateUrl: './date-pipes.component.html',
  styleUrls: [ './date-pipes.component.css' ]
} )
export class DatePipesComponent implements OnInit {

  bindingType = 'Date Pipes';
  codeData: ModalData = new ModalData();

  public date = new Date();

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
