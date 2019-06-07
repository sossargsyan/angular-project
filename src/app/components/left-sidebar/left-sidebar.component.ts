import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  menuItems: MenuItemModel[] = [
    {
      name: 'Dashboard',
      url: '/dashboard'
    },
    {
      name: 'Users',
      url: '/users'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
