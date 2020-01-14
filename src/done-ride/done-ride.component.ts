import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  day: string;
  horse: string;
  hour: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {day: '30.10.2019', horse: 'Jantar', hour: "17.00", status: 'Oczekuje potwierdzenia'},
  {day: "24.11.2019", horse: 'J-Irys', hour: "15.00", status: 'Oczekuje potwierdzenia'},
  {day: "12.01.2020", horse: 'Jantar', hour: "16.00", status: 'Potwierdzone'},
  {day: "12.01.2020", horse: 'Bartek', hour: "17.00", status: 'Potwierdzone'},
];

const DONE_ELEMENT_DATA: PeriodicElement[] = [
  {day: '15.09.2019', horse: 'Jantar', hour: "16.00", status: 'Zapłacone'},
  {day: "22.08.2019", horse: 'J-Irys', hour: "17.00", status: 'Zapłacone'},
  {day: "22.05.2020", horse: 'Jantar', hour: "16.00", status: 'Zapłacone'},
  {day: "12.03.2020", horse: 'Bartek', hour: "19.00", status: 'Zapłacone'},
];

@Component({
  selector: 'app-done-ride',
  templateUrl: './done-ride.component.html',
  styleUrls: ['./done-ride.component.css']
})
export class DoneRideComponent implements OnInit {

  displayedColumns: string[] = ['day', 'horse', 'hour', 'status'];
  dataSource = ELEMENT_DATA;
  doneDataSource = DONE_ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
