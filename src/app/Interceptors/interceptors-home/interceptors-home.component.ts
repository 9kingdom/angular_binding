import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-interceptors-home',
  templateUrl: './interceptors-home.component.html',
  styleUrls: [ './interceptors-home.component.css' ]
} )
export class InterceptorsHomeComponent implements OnInit {
  bindingType = 'Interceptors';

  constructor( private commonService: CommonService ) { }

  ngOnInit() { }

  setName( name: string ) {
    this.commonService.name.next( name );
    this.commonService.setInitName( name );
  }
}
