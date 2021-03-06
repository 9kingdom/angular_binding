import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-non-rxjs',
  templateUrl: './non-rxjs.component.html',
  styleUrls: [ './non-rxjs.component.css' ]
} )
export class NonRxjsComponent implements OnInit {
  bindingType = 'non RxJS Observable';

  constructor() { }

  code1 = `import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

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
   const customIntervalObservable = Observable.create( observer => {
      let count = 0;
      setInterval( () => {
        observer.next( count );
        if ( count === 5 ) {
          observer.complete();
        }
        if ( count > 3 ) {
          observer.error( new Error( 'Count is greater 3!' ) );
        }
        count++;
      }, 1000 );
    } );

    this.firstObsSubscription = customIntervalObservable.subscribe( data => {
      console.log( data );
    }, error => {
      console.log( error );
      alert( error.message );
    }, () => {
      console.log( 'Completed!' );
    } );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
`;
  ngOnInit() {
  }

}
