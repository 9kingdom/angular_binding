import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: [ './custom-observable.component.css' ]
} )
export class CustomObservableComponent implements OnInit, OnDestroy {

  bindingType = 'Custom Observables';
  private nameSubscription: Subscription;
  componentName = '';

  constructor( private commonService: CommonService ) { }

  ngOnInit() {
    this.nameSubscription = this.commonService.name.subscribe( name => {
      this.componentName = name;
    } );
    this.componentName = this.commonService.getInitName();
  }

  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
  }
}
