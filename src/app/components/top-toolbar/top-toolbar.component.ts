import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  SiteTitle: string;

  constructor(translate: TranslateService) {
    translate.get('TOP-TOOLBAR').subscribe((res) => {
      this.SiteTitle = res.siteTitle;
    });
  }

  ngOnInit() {

  }

}
