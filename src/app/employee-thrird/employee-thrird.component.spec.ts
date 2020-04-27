import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeThrirdComponent } from './employee-thrird.component';

describe('EmployeeThrirdComponent', () => {
  let component: EmployeeThrirdComponent;
  let fixture: ComponentFixture<EmployeeThrirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeThrirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeThrirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
