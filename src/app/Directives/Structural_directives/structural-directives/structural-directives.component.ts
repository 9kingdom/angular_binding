import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit, OnDestroy {
  bindingType = 'Built-in structural directives';
  private nameSubscription: Subscription;
  componentName = 'main';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.nameSubscription = this.commonService.name.subscribe(name => {
      this.componentName = name;
    });
  }

  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
  }
}
