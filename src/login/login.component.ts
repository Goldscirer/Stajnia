import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StateService} from "../app/state.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;

  constructor(public router: Router,
              public stateService: StateService) { }

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
  }

}
