import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';
import { interval } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

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
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UsersService) {}

  ngOnInit() {
  }

  addUser() {
    var userData: User = {
      id: this.userService.getBiggestID() + 1,
      name: this.name,
      surname: this.surname,
      email: this.email
    };
    this.dialogRef.close(userData);
  }

}
