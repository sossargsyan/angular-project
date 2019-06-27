import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: User, private userService: UsersService, private fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.addUserForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  ngOnInit() {
  }
  addUser(userData: User) {
    
    this.userService.addUser(userData).subscribe((data: any) => {
      this.dialogRef.close(data.user);
    }, error => {
      this._snackBar.open(error.error.errorMessage, "close", {
        duration: 5000,
      });
    });    
  }
}
