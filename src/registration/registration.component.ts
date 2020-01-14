import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}
