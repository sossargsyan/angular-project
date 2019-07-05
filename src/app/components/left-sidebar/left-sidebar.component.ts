import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  menuItems: MenuItemModel[] = [    
    {
      name: 'users',
      url: '/users'
    },
    {
      name: "settings",
      url: '/settings'
    }
  ];
  constructor(translate: TranslateService) {
    // translate.get('LEFT-SIDEBAR').subscribe((res) => {
    //   this.menuItems[0].name = res.dashboard;
    //   this.menuItems[1].name = res.users;
    // });
  }


  ngOnInit() {
  }

}
