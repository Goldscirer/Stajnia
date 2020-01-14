import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {StateService} from "../app/state.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = ['name'];

  constructor(public router: Router,
              public stateService: StateService) { }

  items = [
    { id: 1, name: 'Strona Głowna' },
    { id: 2, name: 'Zapisz się na jazdę' },
    { id: 3, name: 'Twoja jazda' }
  ];

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
  }

  onContextMenuAction1(item: Item) {
    alert(`Click on Action 1 for ${item.name}`);
  }

  onContextMenuAction2(item: Item) {
    alert(`Click on Action 2 for ${item.name}`);
  }

  ngOnInit(): void {
  }
}

export interface Item {
  id: number;
  name: string;
}
