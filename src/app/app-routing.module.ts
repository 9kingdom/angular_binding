import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './Binding/binding_home/binding.component';
import { InterpolationComponent } from './Binding/binding_examples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Binding/binding_examples/property-binding/property-binding.component';
import { ClassBindingComponent } from './Binding/binding_examples/class-binding/class-binding.component';
import { StyleBindingComponent } from './Binding/binding_examples/style-binding/style-binding.component';
import { TwowayBindingComponent } from './Binding/binding_examples/twoway-binding/twoway-binding.component';
import { EventBindingComponent } from './Binding/binding_examples/event-binding/event-binding.component';
import { DirectivesComponent } from './Directives/directive_home/directives.component';
import { ObservablesComponent } from './observables/observables.component';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './Binding/binding_examples/parent-component/parent-component.component';
import { AtributeDirectivesComponent } from './Directives/Atribute_directives/atribute-directives/atribute-directives.component';
import { StructuralDirectivesComponent } from './Directives/Structural_directives/structural-directives/structural-directives.component';
import { FormsHomeComponent } from './Forms/forms-home/forms-home.component';
import { CustomDirectivesComponent } from './Directives/custom-directives/custom-directives.component';
import { NgIfComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-if/ng-if.component';
import { NgForComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-for/ng-for.component';
import { NgSwitchComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-switch/ng-switch.component';
import { NgModelComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-model/ng-model.component';
import { NgClassComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-class/ng-class.component';
import { NgStyleComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-style/ng-style.component';
import { ViewchildComponent } from './Binding/binding_examples/viewchild/viewchild.component';
import { PipesHomeComponent } from './Pipes/pipes-home/pipes-home.component';
import { StringPipesComponent } from './Pipes/string-pipes/string-pipes.component';
import { NumberPipesComponent } from './Pipes/number-pipes/number-pipes.component';
import { DatePipesComponent } from './Pipes/date-pipes/date-pipes.component';

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
            // thanks to this route it will load automatically the 'interpolation' component every time 'Binding section is selected
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
          { path: 'inputoutput', component: ParentComponent },
          { path: 'viewchild', component: ViewchildComponent }
        ]
      },
      {
        path: 'directives',
        component: DirectivesComponent,
        children: [
          {
            // thanks to this it will load automatically the 'atributedirectives' component
            path: '',
            redirectTo: 'atributedirectives',
            pathMatch: 'full'
          },
          {
            path: 'atributedirectives',
            component: AtributeDirectivesComponent,
            children: [
              { path: 'ngmodel', component: NgModelComponent },
              { path: 'ngclass', component: NgClassComponent },
              { path: 'ngstyle', component: NgStyleComponent }
            ]
          },
          {
            path: 'structuraldirectives',
            component: StructuralDirectivesComponent,
            children: [
              { path: 'ngif', component: NgIfComponent },
              { path: 'ngfor', component: NgForComponent },
              { path: 'ngswitch', component: NgSwitchComponent }
            ]
          },
          { path: 'customdirective', component: CustomDirectivesComponent },
          { path: 'ngif', component: NgIfComponent },
          { path: 'ngswitch', component: NgSwitchComponent },
          { path: 'ngfor', component: NgForComponent }
        ]
      },
      {
        path: 'pipes',
        component: PipesHomeComponent,
        children: [
          {
            // thanks to this it will load automatically the 'pipesexample' component
            path: '',
            redirectTo: 'stringpipes',
            pathMatch: 'full'
          },
          { path: 'stringpipes', component: StringPipesComponent },
          { path: 'numberpipes', component: NumberPipesComponent },
          { path: 'datepipes', component: DatePipesComponent }
        ]
      },
      {
        path: 'observables',
        component: ObservablesComponent
      },
      {
        path: 'routing',
        component: RoutingComponent
      },
      {
        path: 'forms',
        component: FormsHomeComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
