import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Examples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Examples/property-binding/property-binding.component';
import { ClassBindingComponent } from './Examples/class-binding/class-binding.component';
import { StyleBindingComponent } from './Examples/style-binding/style-binding.component';
import { EventBindingComponent } from './Examples/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Examples/twoway-binding/twoway-binding.component';
import { NgIfComponent } from './Examples/ng-if/ng-if.component';
import { NgSwitchComponent } from './Examples/ng-switch/ng-switch.component';
import { NgForComponent } from './Examples/ng-for/ng-for.component';
import { InputOutputComponent } from './Examples/input-output/input-output.component';
import { PipesExampleComponent } from './Examples/pipes/pipes-examples.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NavbarComponent } from './page-headders/navbar/navbar.component';
import { JumbotronComponent } from './page-headders/jumbotron/jumbotron.component';
import { FooterComponent } from './page-headders/footer/footer.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesComponent } from './Directives/directive_home/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ObservablesComponent } from './observables/observables.component';
import { RoutingComponent } from './routing/routing.component';
import { CustomDirectiveComponent } from './Examples/custom-directive/custom-directive.component';
import { ModalComponent } from './page-headders/modal/modal.component';
import { ParentComponent } from './Examples/parent-component/parent-component.component';
import { AtributeDirectivesComponent } from './Directives/atribute-directives/atribute-directives.component';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { CustomDirectivesComponent } from './Directives/custom-directives/custom-directives.component';
import { FormsHomeComponent } from './Forms/forms-home/forms-home.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import('node_modules/highlight.js/lib/languages/typescript'),
    css: () => import('node_modules/highlight.js/lib/languages/css'),
    xml: () => import('node_modules/highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    InputOutputComponent,
    PipesComponent,
    PipesExampleComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    BindingComponent,
    HomeComponent,
    DirectivesComponent,
    ObservablesComponent,
    RoutingComponent,
    CustomDirectiveComponent,
    ModalComponent,
    ParentComponent,
    AtributeDirectivesComponent,
    StructuralDirectivesComponent,
    CustomDirectivesComponent,
    FormsHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
