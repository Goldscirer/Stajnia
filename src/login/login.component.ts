import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StateService} from "../app/state.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;

  constructor(public router: Router,
              public stateService: StateService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(name: string, password: string) {
    console.log(name, password);
    if (name === 'user' && password === 'user') {
      this.router.navigate(['/home'], {});
    }

    if (name === 'admin' && password === 'admin') {
      this.stateService.setInstructor();
      this.router.navigate(['/home'], {});
    }

    if (name !== 'user' && password !== 'user' && name !== 'admin' && password !== 'admin') {
      this.openSnackBar("Incorrect data! Please try again. :)", "");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['snackbar']
    });
  }

}
