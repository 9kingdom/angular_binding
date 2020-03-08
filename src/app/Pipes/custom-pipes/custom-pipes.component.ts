import { Component, OnInit } from '@angular/core';
import { ModalData } from 'src/app/modal-data';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: [ './custom-pipes.component.css' ]
} )
export class CustomPipesComponent implements OnInit {

  bindingType = 'Custom Pipes';

  filterPipe = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {i
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}`;

  pipeDecorator = `@Pipe({
  name: 'filter',
  pure: false
})`;

  usage = `<ul class="list-group">
  <li class="list-group-item" *ngFor="let server of servers | filter:filteredStatus:'status'">
  <span class="badge">{{ server.status }}</span>
  <strong>{{ server.name | shorten:15 }}</strong> |
  {{ server.instanceType | uppercase }} |
  {{ server.started | date:'fullDate' | uppercase }}
  </li>
</ul>`;

  code1 = `@Component( {
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: [ './custom-pipes.component.css' ],
  providers: [ 'KilometersToMilesPipe' ]
} )
export class CustomPipesComponent implements OnInit {`;

  code2 = `constructor( private convertToMiles: KilometersToMilesPipe ) { }`;

  code3 = `this.convertToMiles.transform( x )`;

  constructor( private commonService: CommonService ) { }

  ngOnInit() {
  }
}
