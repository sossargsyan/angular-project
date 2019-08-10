import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { UsersService } from 'src/app/services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/reducers/app.reducer';
import * as UsersActions from '../../../store/actions/user.actions';



@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  onDeleteUser = new EventEmitter<number>();

  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private userService: UsersService,
    private _snackBar: MatSnackBar,
    private store: Store<fromApp.AppState>) {}

  ngOnInit() {
  }

  deleteUser(): void {
    this.store.dispatch(new UsersActions.DeleteUserFromServer(this.data.id, this.dialogRef));
    // this.userService.deleteUser(this.data.id).subscribe((res: any) => {
    //   this.dialogRef.close(res);
    // }, error => {
    //   this._snackBar.open(error.error.errorMessage, "close", {
    //     duration: 5000,
    //   });
    // });    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
