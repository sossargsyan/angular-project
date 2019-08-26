import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { select, Store } from "@ngrx/store";

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

import { EditUserComponent } from '../edit-user/edit-user.component';
import * as fromUsers from '../../../store/reducers/users.reducer';
import * as fromApp from '../../../store/reducers/app.reducer';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string;
  user: User;
  userNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private dialog: MatDialog,
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.store.pipe(select(fromUsers.getUser, {UserId: this.id})).subscribe(
      (user: User) => {
        this.user = user;
      }
    );

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '320px',
      data: this.user
    });
  }

}
