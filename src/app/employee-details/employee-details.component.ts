import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h1>
    <font color="red">This is {{ bindingType }}</font>
    </h1>
    <h3>{{ errorMessage }}</h3>
    <ul *ngFor="let employee of employees; index as i">
      <li>{{i+1}}. {{employee.name}} - {{ employee.age }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public bindingType = 'Employee Details List';
  public employees = [];
  public errorMessage;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data,
      error => this.errorMessage = error);
  }

}
