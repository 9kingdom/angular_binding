import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ModalData } from 'src/app/modal-data';

@Component( {
  selector: 'app-number-pipes',
  templateUrl: './number-pipes.component.html',
  styleUrls: [ './number-pipes.component.css' ]
} )
export class NumberPipesComponent implements OnInit {

  bindingType = 'Number Pipes';
  codeData: ModalData = new ModalData();

  num = 5.678;

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
