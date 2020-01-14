import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidePlanComponent } from './ride-plan.component';

describe('RidePlanComponent', () => {
  let component: RidePlanComponent;
  let fixture: ComponentFixture<RidePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
