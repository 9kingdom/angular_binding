import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideAdditionalNav = false;
  title = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.routeConfig.component.name === 'HomeComponent') {
      this.hideAdditionalNav = true;
    }

    switch (this.route.routeConfig.component.name) {
      case 'BindingComponent': {
        this.title = 'Binding';
        break;
      }
      case 'DirectivesComponent': {
        this.title = 'Directives';
        break;
      }
      case 'PipesComponent': {
        this.title = 'Pipes';
        break;
      }
      case 'ObservablesComponent': {
        this.title = 'Observables';
        break;
      }
      case 'RoutingComponent': {
        this.title = 'Routing';
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
}
