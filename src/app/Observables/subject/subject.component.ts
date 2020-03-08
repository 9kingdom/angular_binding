import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component( {
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: [ './subject.component.css' ]
} )
export class SubjectComponent implements OnInit {
  bindingType = 'Subject';

  constructor() { }

  code1 = `let subject = new Subject<string>();

// subscribe to the subject
subject.subscribe((data) => {
  console.log("ubscriber received the following data => " + data);
});

// use subject to emit data
subject.next("Eureka");

// Console output: Subscriber received the following data => Eureka`;

  code2 = `let subject = new Subject<string>();

subject.subscribe((data) => {
  console.log("Subscriber 1 received the following data => " + data);
});
subject.subscribe((data) => {
  console.log("Subscriber 2 received the following data => "+ data);
});

subject.next("Eureka");

// Console result:
// Subscriber 1 received the following data =>  Eureka
// Subscriber 2 received the following data =>  Eureka`;

  code3 = `// Don't do that or you subscribers will be able to "mess" with your subject
getData(): Subject<Data> {
    return this.subject;
}
// Do this instead:
getData(): Observable<Data> {
    return this.subject.asObservable();
}`;

  code4 = `// Behavior subjects need a first value
let subject = new BehaviorSubject<string>("First value");

subject.asObservable().subscribe((data) => {
  console.log("First subscriber received the following data => " + data);
});

subject.next("Second value")

// Console result:
// First subscriber received the following data => First value
// First subscriber received the following data => Second value`;

  code5 = `// tell the ReplaySubject how many values should be kept in history
let subject = new ReplaySubject<string>(2);

subject.next("First value");
subject.next("Second value");
subject.next("Third value");

subject.asObservable().subscribe((data) => {
  console.log("First subscriber received the following data => " + data);
});

subject.next("Fourth value");

//Console result:
// First subscriber got data >>>>> Second value
// First subscriber got data >>>>> Third value
// First subscriber got data >>>>> Fourth value`;


  ngOnInit() {

  }

}
