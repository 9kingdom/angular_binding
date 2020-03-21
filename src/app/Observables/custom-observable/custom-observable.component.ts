import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: [ './custom-observable.component.css' ]
} )
export class CustomObservableComponent implements OnInit, OnDestroy {

  bindingType = 'Observables vs Promise';
  private nameSubscription: Subscription;
  componentName = '';

  code1 = `const promise = new Promise((data) =>
{ data(1);
  data(2);
  data(3); })
.then(element => console.log(‘Promise ‘ + element));`;

  code2 = `Promise 1`;

  code3 = `const observable = new Observable((data) => {
data.next(1);
data.next(2);
data.next(3);
}).subscribe(element => console.log('Observable ' + element));`;

  code4 = `Observable 1
Observable 2
Observable 3`;

  code5 = `let sub1: Subscription;
let sub2: Subscription;
ngOnInit() {
   this.sub1 = this.service.Subject1.subscribe(() => {});
   this.sub2 = this.service.Subject2.subscribe(() => {});
}
ngOnDestroy() {
   if (this.sub1) {
      this.sub1.unsubscribe();
   }
   if (this.sub2) {
      this.sub2.unsubscribe();
   }
}`;

  code6 = `let subs: Subscription[] = [];
ngOnInit() {
   this.subs.push(this.service.Subject1.subscribe(() => {}));
   this.subs.push(this.service.Subject2.subscribe(() => {}));
}
ngOnDestroy() {
   subs.forEach(sub => sub.unsubscribe());
}`;

  code7 = `private subscriptions = new Subscription();
ngOnInit() {
   this.subscriptions.add(this.service.Subject1.subscribe(() => {}));
   this.subscriptions.add(this.service.Subject2.subscribe(() => {}));
}
ngOnDestroy() {
   this.subscriptions.unsubscribe();
}`;

  code8 = `ngUnsubscribe = new Subject();
ngOnInit() {
   this.service.Subject1.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {});
   this.service.Subject2.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {});
}
ngOnDestroy() {
   this.ngUnsubscribe.next();
   this.ngUnsubscribe.complete();
}`;

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
