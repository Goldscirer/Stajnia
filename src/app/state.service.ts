import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public instructor: boolean = false;

  constructor() { }

  setInstructor() {
    this.instructor = true;
  }
}
