import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user: User;
  constructor(private route: ActivatedRoute, private userService: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.id = parseInt( this.route.snapshot.params['id'] );
    this.user = this.userService.getUserByID(this.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '320px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('The user was updated', result);
        this.userService.updateUser(result);
        this.user = this.userService.getUserByID(result.id);
      }
    });
  }

}
