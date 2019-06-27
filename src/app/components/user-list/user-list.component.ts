import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(public dialog: MatDialog,
              private userService: UsersService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.loading = false;
        this.users = data;
      }, errorCase => {
        this._snackBar.open(errorCase.error.errorMessage, "close", {
          duration: 5000,
        });
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(user => {
      if(user) {
        this.users.push(user);
      }
    });
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
}
