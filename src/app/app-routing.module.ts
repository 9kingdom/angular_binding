import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { InterpolationComponent } from './Examples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Examples/property-binding/property-binding.component';
import { ClassBindingComponent } from './Examples/class-binding/class-binding.component';
import { StyleBindingComponent } from './Examples/style-binding/style-binding.component';
import { TwowayBindingComponent } from './Examples/twoway-binding/twoway-binding.component';
import { EventBindingComponent } from './Examples/event-binding/event-binding.component';
import { NgIfComponent } from './Examples/ng-if/ng-if.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgSwitchComponent } from './Examples/ng-switch/ng-switch.component';
import { NgForComponent } from './Examples/ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesExampleComponent } from './Examples/pipes/pipes-examples.component';
import { InputOutputComponent } from './Examples/input-output/input-output.component';
import { ObservablesComponent } from './observables/observables.component';
import { RoutingComponent } from './routing/routing.component';
import { CustomDirectiveComponent } from './Examples/custom-directive/custom-directive.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'binding',
        component: BindingComponent,
        children: [
          {
            //thanks to this route it will load automatically the 'interpolation' component every time 'Binding section is selected
            path: '',
            redirectTo: 'interpolation',
            pathMatch: 'full'
          },
          { path: 'interpolation', component: InterpolationComponent },
          { path: 'propertybinding', component: PropertyBindingComponent },
          { path: 'classbinding', component: ClassBindingComponent },
          { path: 'stylebinding', component: StyleBindingComponent },
          { path: 'twowaybinding', component: TwowayBindingComponent },
          { path: 'eventbinding', component: EventBindingComponent },
          { path: 'inputoutput', component: InputOutputComponent }
        ]
      },
      {
        path: 'directives',
        component: DirectivesComponent,
        children: [
          {
            //thanks to this it will load automatically the 'ngswitch' component
            path: '',
            redirectTo: 'ngswitch',
            pathMatch: 'full'
          },
          { path: 'ngif', component: NgIfComponent },
          { path: 'ngswitch', component: NgSwitchComponent },
          { path: 'ngfor', component: NgForComponent },
          { path: 'customdirective', component: CustomDirectiveComponent }
        ]
      },
      {
        path: 'pipes',
        component: PipesComponent,
        children: [
          {
            //thanks to this it will load automatically the 'pipesexample' component
            path: '',
            redirectTo: 'pipesexample',
            pathMatch: 'full'
          },
          { path: 'pipesexample', component: PipesExampleComponent }
        ]
      },
      {
        path: 'observables',
        component: ObservablesComponent
      },
      {
        path: 'routing',
        component: RoutingComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
