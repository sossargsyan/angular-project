import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }

  openDeleteDialog(user_item): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '250px',
      data: user_item,
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
