import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    TopToolbarComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
