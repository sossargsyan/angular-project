import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  user: User;
  PageText = [];

  constructor(public dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: User,
              private fb: FormBuilder,
              private userService: UsersService,
              private _snackBar: MatSnackBar,
              translate: TranslateService) {
    translate.get('ADD-EDIT-USER').subscribe((res) => {
      this.PageText = res;
    });

    this.editUserForm = this.fb.group({
      _id: new FormControl(data._id, [Validators.required]),
      name: new FormControl(data.name, [Validators.required]),
      surname: new FormControl(data.surname, [Validators.required]),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
  }

  updateUser(userData: User) {
    this.userService.updateUser(userData).subscribe(
      (successCase: any) => {
        if (successCase.successMessage !== undefined) {
          this.dialogRef.close(successCase.user);
        }
      }, errorCase => {
        this._snackBar.open(errorCase.error.errorMessage, 'close', {
          duration: 5000,
        });
      }
    );

  }

}
