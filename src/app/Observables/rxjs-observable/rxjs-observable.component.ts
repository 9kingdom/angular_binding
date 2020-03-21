import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: [ './rxjs-observable.component.css' ]
} )
export class RxjsObservableComponent implements OnInit {

  bindingType = 'RxJS Observable';

  constructor() { }

  code1 = `import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.firstObsSubscription = interval( 1000 ).subscribe( 
	count => {
      console.log( count );
    } );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}`;

  code2 = ``;
  ngOnInit() {
  }

}
