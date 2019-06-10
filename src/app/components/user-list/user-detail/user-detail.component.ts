import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: number;
  user;
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.id = parseInt( this.route.snapshot.params['id'] );
    this.user = this.userService.getUserByID(this.id);
  }

}
