import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [
    {
      name: 'Aram', 
      surname: 'Aramyan', 
      email: 'aramaramyan@example.com'
    },
    {
      name: 'Sanasar', 
      surname: 'Baghdasaryan', 
      email: 'sanasarbaghdasaryan@example.com'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}