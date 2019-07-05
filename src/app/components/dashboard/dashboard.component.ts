import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  langs = [
    {
      value: 'en',
      title: 'English'
    },
    {
      value: 'hy',
      title: 'Հայերեն'
    }
  ];

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(lang: string) {
    this._translate.use(lang);
  }

}
