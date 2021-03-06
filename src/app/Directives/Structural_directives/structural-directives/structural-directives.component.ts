import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit, OnDestroy {
  bindingType = 'Built-in structural directives';
  private nameSubscription: Subscription;
  componentName: string;

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
