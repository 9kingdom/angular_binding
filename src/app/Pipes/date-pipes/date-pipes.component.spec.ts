import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipesComponent } from './date-pipes.component';

describe('DatePipesComponent', () => {
  let component: DatePipesComponent;
  let fixture: ComponentFixture<DatePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
