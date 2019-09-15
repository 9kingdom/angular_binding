import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { PipesComponent } from './Examples/pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';

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
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
