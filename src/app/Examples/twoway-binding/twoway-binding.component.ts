import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: []
})
export class TwowayBindingComponent implements OnInit {

  bindingType = 'Two Way Binding';
  public name = '';

  constructor() { }

  ngOnInit() {
  }

}
