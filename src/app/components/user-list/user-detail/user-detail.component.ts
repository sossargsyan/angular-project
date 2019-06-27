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
  id: string;
  user: User;
  userNotFound = false;
  constructor(private route: ActivatedRoute, private userService: UsersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.id =  this.route.snapshot.params['id'];
    this.userService.getUserByID(this.id).subscribe(
      (data: User) => {
        setTimeout(()=>{
          this.user = data;
        },2000);
      }, error => {
        this.userNotFound = true;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '320px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {        
        this.user = result;        
      }
    });
  }

}
