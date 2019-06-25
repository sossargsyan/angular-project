import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Output() DeleteUser = new EventEmitter<number>();

  @Input() user: User;

  constructor(public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '250px',
      data: id,
    });

    dialogRef.componentInstance.onDeleteUser.subscribe(
      (UserId: number) => {
        this.DeleteUser.emit(UserId);
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goToDetail() {
    this.router.navigate(['/users', this.user.id]);
  }

}
