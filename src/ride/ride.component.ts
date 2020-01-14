import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  day: string;
  members: string;
  hour: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {day: '30.10.2019', members: '5', hour: "17.00", status: 'maneż'},
  {day: "24.11.2019", members: '6', hour: "15.00", status: 'teren'},
  {day: "12.01.2020", members: '2', hour: "16.00", status: 'maneż'},
  {day: "12.01.2020", members: '3', hour: "17.00", status: 'maneż'},
];

const DONE_ELEMENT_DATA: PeriodicElement[] = [
  {day: '15.09.2019', members: '7', hour: "16.00", status: 'teren'},
  {day: "22.08.2019", members: '5', hour: "17.00", status: 'maneż'},
  {day: "22.05.2020", members: '8', hour: "16.00", status: 'teren'},
  {day: "12.03.2020", members: '1', hour: "19.00", status: 'teren'},
];

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {

  displayedColumns: string[] = ['day', 'members', 'hour', 'status'];
  dataSource = ELEMENT_DATA;
  doneDataSource = DONE_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
