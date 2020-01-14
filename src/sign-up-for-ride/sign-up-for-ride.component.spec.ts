import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpForRideComponent } from './sign-up-for-ride.component';

describe('SignUpForRideComponent', () => {
  let component: SignUpForRideComponent;
  let fixture: ComponentFixture<SignUpForRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpForRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpForRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
