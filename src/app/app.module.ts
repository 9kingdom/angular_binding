import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Binding/binding_examples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Binding/binding_examples/property-binding/property-binding.component';
import { ClassBindingComponent } from './Binding/binding_examples/class-binding/class-binding.component';
import { StyleBindingComponent } from './Binding/binding_examples/style-binding/style-binding.component';
import { EventBindingComponent } from './Binding/binding_examples/event-binding/event-binding.component';
import { TwowayBindingComponent } from './Binding/binding_examples/twoway-binding/twoway-binding.component';
import { InputOutputComponent } from './Binding/binding_examples/input-output/input-output.component';
import { NavbarComponent } from './page-headders/navbar/navbar.component';
import { JumbotronComponent } from './page-headders/jumbotron/jumbotron.component';
import { FooterComponent } from './page-headders/footer/footer.component';
import { BindingComponent } from './Binding/binding_home/binding.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesComponent } from './Directives/directive_home/directives.component';
import { ObservablesComponent } from './Observables/observables_home/observables.component';
import { RoutingComponent } from './routing/routing.component';
import { CustomDirectiveComponent } from './Binding/binding_examples/custom-directive/custom-directive.component';
import { ModalComponent } from './page-headders/modal/modal.component';
import { ParentComponent } from './Binding/binding_examples/parent-component/parent-component.component';
import { AtributeDirectivesComponent } from './Directives/Atribute_directives/atribute-directives/atribute-directives.component';
import { StructuralDirectivesComponent } from './Directives/Structural_directives/structural-directives/structural-directives.component';
import { CustomDirectivesComponent } from './Directives/custom-directives/custom-directives.component';
import { FormsHomeComponent } from './Forms/forms-home/forms-home.component';
import { NgForComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-for/ng-for.component';
import { NgIfComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-if/ng-if.component';
import { NgSwitchComponent } from './Directives/Structural_directives/Structural_directives_examples/ng-switch/ng-switch.component';
import { NgModelComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-model/ng-model.component';
import { NgClassComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-class/ng-class.component';
import { NgStyleComponent } from './Directives/Atribute_directives/Atribute_directives_examples/ng-style/ng-style.component';
import { ViewchildComponent } from './Binding/binding_examples/viewchild/viewchild.component';
import { PipesHomeComponent } from './Pipes/pipes-home/pipes-home.component';
import { StringPipesComponent } from './Pipes/string-pipes/string-pipes.component';
import { NumberPipesComponent } from './Pipes/number-pipes/number-pipes.component';
import { DatePipesComponent } from './Pipes/date-pipes/date-pipes.component';
import { CustomPipesComponent } from './Pipes/custom-pipes/custom-pipes.component';
import { CustomObservableComponent } from './Observables/custom-observable/custom-observable.component';
import { RxjsObservableComponent } from './Observables/rxjs-observable/rxjs-observable.component';
import { SubjectComponent } from './Observables/subject/subject.component';
import { NonRxjsComponent } from './Observables/non-rxjs/non-rxjs.component';
import { PromiseComponent } from './Observables/promise/promise.component';
import { TwowayChildComponent } from './Binding/binding_examples/twoway-binding/twoway-child/twoway-child.component';
import { InterceptorsHomeComponent } from './Interceptors/interceptors-home/interceptors-home.component';
import { CommonPipesComponent } from './Pipes/common-pipes/common-pipes.component';

export function getHighlightLanguages() {
  return {
    typescript: () => import( 'node_modules/highlight.js/lib/languages/typescript' ),
    css: () => import( 'node_modules/highlight.js/lib/languages/css' ),
    xml: () => import( 'node_modules/highlight.js/lib/languages/xml' )
  };
}

@NgModule( {
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
    FormsHomeComponent,
    NgModelComponent,
    NgClassComponent,
    NgStyleComponent,
    ViewchildComponent,
    PipesHomeComponent,
    StringPipesComponent,
    NumberPipesComponent,
    DatePipesComponent,
    CustomPipesComponent,
    CustomObservableComponent,
    RxjsObservableComponent,
    SubjectComponent,
    NonRxjsComponent,
    PromiseComponent,
    TwowayChildComponent,
    InterceptorsHomeComponent,
    CommonPipesComponent
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
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
