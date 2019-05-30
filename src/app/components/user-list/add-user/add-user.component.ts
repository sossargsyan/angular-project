import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';
import { userInfo } from 'os';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name:string;
  surname:string;
  email:string;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit() {
  }

  addUser() {
    var userData: User = {
      name: this.name,
      surname: this.surname,
      email: this.email
    };
    this.dialogRef.close(userData);
  }

}
