import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';

import * as fromApp from '../../store/reducers/app.reducer';
import * as UsersActions from  '../../store/actions/user.actions';

import { User } from 'src/app/models/user.model';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loading: Observable< boolean >;
  users: Observable<User[]>;
  // users: User[];
  
  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private _snackBar: MatSnackBar,
    private store: Store<fromApp.AppState>
  ) {
    // this.users = this.store.pipe(select(state => state.users.users ),tap(state => {console.log( typeof state, state)}));
    this.loading = this.store.pipe(select(state => state.users.isLoading));
    this.users = this.store.pipe(select(state => state.users.users));
    // this.store.select('users')
    // .subscribe(
    //   (state)=>{
    //     this.users = state.users;
    //   }      
    // );
    // this.users = this.store.select('users')
    //   .pipe(
    //     map(usersState => {
    //       return {
    //         users: usersState.users,
    //         isLoading: usersState.isLoading
    //       }
    //     })
    //   );
  }

  ngOnInit() {
    // this.loading = true;
    this.store.dispatch(new UsersActions.GetUsersFromServer());
    // this.users = this.users;
    // this.loading = false;
    // .subscribe((data) => {
    //   console.log(data);
    // })

    // this.userService.getUsers().subscribe(
    //   (data: User[]) => {
    //     this.loading = false;
    //     this.users = data;
    //   }, errorCase => {
    //     this._snackBar.open(errorCase.error.errorMessage, "close", {
    //       duration: 5000,
    //     });
    //   });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(user => {
      if(user) {
        // this.users.push(user);
      }
    });
  }

  deleteUser(index: number): void {
    // this.users.splice(index, 1);
  }
}
