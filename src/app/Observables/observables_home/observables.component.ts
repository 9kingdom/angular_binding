import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: [ './observables.component.css' ]
} )
export class ObservablesComponent implements OnInit {
  bindingType = 'Observables';

  constructor( private commonService: CommonService ) { }

  ngOnInit() { }

  setName( name: string ) {
    this.commonService.name.next( name );
    this.commonService.setInitName( name );
  }
}
