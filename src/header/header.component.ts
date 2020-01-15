import {Component, Input, OnInit} from '@angular/core';
import {StateService} from "../app/state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() siteName: string;

  constructor(public stateService: StateService) { }

  ngOnInit() {
  }

  clearState() {
    this.stateService.instructor = false;
  }

}
