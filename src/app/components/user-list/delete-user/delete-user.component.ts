import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  ngOnInit() {
  }

  deleteUser() {
    console.log(this.data);

  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
