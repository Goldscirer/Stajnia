import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldRideComponent } from './old-ride.component';

describe('OldRideComponent', () => {
  let component: OldRideComponent;
  let fixture: ComponentFixture<OldRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
