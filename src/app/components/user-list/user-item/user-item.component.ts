import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Output() DeleteUser = new EventEmitter<number>();

  @Input() user: User;
  @Input() index: number;

  constructor(public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '250px',
      data: { id: this.user._id },
    });  

    dialogRef.afterClosed().subscribe(result => {
      if (result.successMessage !== undefined){        
        this.DeleteUser.emit(this.index);
      }
    });
  }

  goToDetail() {
    this.router.navigate(['/users', this.user._id]);
  }

}
