import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  bindingType = 'Built-in structural directives';

  constructor(private commonService: CommonService) {}

  ngOnInit() {}

  setName(name: string) {
    this.commonService.name.next(name);
  }
}
