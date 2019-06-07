import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [
    {
      name: 'Aram',
      surname: 'Aramyan',
      email: 'aramaramyan@example.com'
    },
    {
      name: 'Sanasar',
      surname: 'Baghdasaryan',
      email: 'sanasarbaghdasaryan@example.com'
    },
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.users.push(result);
    });
  }

  deleteUser(UserId: number): void {
    console.log('WHAT?');
    this.users.splice(UserId, 1);
  }

}
