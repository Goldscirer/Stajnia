import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneRideComponent } from './done-ride.component';

describe('DoneRideComponent', () => {
  let component: DoneRideComponent;
  let fixture: ComponentFixture<DoneRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
