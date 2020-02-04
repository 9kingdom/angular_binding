import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-atribute-directives',
  templateUrl: './atribute-directives.component.html',
  styleUrls: ['./atribute-directives.component.css']
})
export class AtributeDirectivesComponent implements OnInit, OnDestroy {
  bindingType = 'Built-in attribute directives';
  private nameSubscription: Subscription;
  componentName = '';

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.nameSubscription = this.commonService.name.subscribe(name => {
      this.componentName = name;
    });
    this.componentName = this.commonService.getInitName();
  }

  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
  }
}
