import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-common-pipes',
  templateUrl: './common-pipes.component.html',
  styleUrls: [ './common-pipes.component.css' ]
} )
export class CommonPipesComponent implements OnInit {

  bindingType = 'Common Angular pipes';
  constructor() { }

  ngOnInit() {
  }

}
