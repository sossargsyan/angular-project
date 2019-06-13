import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(public dialog: MatDialog, private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('The dialog was closed', result);
        this.userService.users.push(result);
        this.users = this.userService.getUsers();
      }
    });
  }

  deleteUser(UserId: number): void {
    this.userService.users.splice(UserId, 1);
    this.users = this.userService.getUsers();
  }
}
