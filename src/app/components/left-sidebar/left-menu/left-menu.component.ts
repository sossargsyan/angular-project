import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input() menuItems;

  constructor() { }

  ngOnInit() {
  }

}
