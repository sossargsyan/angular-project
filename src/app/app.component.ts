import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  constructor(translate: TranslateService) {
    let lang = localStorage.getItem('lang');
    if  (!!lang) {
      translate.setDefaultLang(lang);
      translate.use(lang);
    }else{
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('lang', 'en');
    }
    
  }
}
