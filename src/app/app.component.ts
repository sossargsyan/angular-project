import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import * as fromApp from "./store/reducers/app.reducer";
import * as UsersActions from "./store/actions/user.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  constructor(
    translate: TranslateService,
    private store: Store<fromApp.AppState>
  ) {
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

  ngOnInit() {
    this.store.dispatch(new UsersActions.GetUsersFromServer());
  }
}
