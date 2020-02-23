import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
} )
export class NavbarComponent implements OnInit {
  hideAdditionalNav = false;
  title = '';

  constructor( private route: ActivatedRoute, private commonService: CommonService ) { }

  ngOnInit() {
    if ( this.route.routeConfig.component.name === 'HomeComponent' ) {
      this.hideAdditionalNav = true;
    }

    switch ( this.route.routeConfig.component.name ) {
      case 'BindingComponent': {
        this.title = 'Binding';
        break;
      }
      case 'DirectivesComponent': {
        this.title = 'Directives';
        break;
      }
      case 'PipesHomeComponent': {
        this.title = 'Pipes';
        break;
      }
      case 'ObservablesComponent': {
        this.title = 'Observables';
        break;
      }
      case 'InterceptorsHomeComponent': {
        this.title = 'Interceptors';
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

  setName( name: string ) {
    this.commonService.name.next( name );
    this.commonService.setInitName( name );
  }

}
