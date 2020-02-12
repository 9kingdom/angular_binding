import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-pipes-home',
  templateUrl: './pipes-home.component.html',
  styleUrls: ['./pipes-home.component.css']
})
export class PipesHomeComponent implements OnInit {

  bindingType = 'Pipes';

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  setName( name: string ) {
    this.commonService.name.next( name );
    this.commonService.setInitName( name );
  }

}
