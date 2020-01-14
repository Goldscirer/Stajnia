import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  @Input() siteName: string;

  constructor() { }

  ngOnInit() {
  }

}
