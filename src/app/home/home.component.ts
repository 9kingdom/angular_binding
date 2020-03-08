import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {

  time = new Observable<string>( ( observer: Observer<string> ) => {
    setInterval( () => observer.next( new Date().toString() ), 1000 );
  } );

  constructor() { }

  ngOnInit() {
  }

}
