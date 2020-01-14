import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignUpDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
