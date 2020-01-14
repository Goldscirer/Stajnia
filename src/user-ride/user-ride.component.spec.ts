import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRideComponent } from './user-ride.component';

describe('UserRideComponent', () => {
  let component: UserRideComponent;
  let fixture: ComponentFixture<UserRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
