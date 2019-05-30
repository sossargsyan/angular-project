import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UserDetailComponent } from './components/user-list/user-detail/user-detail.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
<<<<<<< HEAD
import { LeftMenuComponent } from './components/left-sidebar/left-menu/left-menu.component';

=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
>>>>>>> 626145ee6fd3eee7f60d1f2cd5125fab794c8f6e
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
<<<<<<< HEAD
  MatMenuModule
=======
  MatCardModule,
  MatListModule,
  MatIconModule
>>>>>>> 626145ee6fd3eee7f60d1f2cd5125fab794c8f6e
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    TopToolbarComponent,
    LeftSidebarComponent,
<<<<<<< HEAD
    LeftMenuComponent
=======
>>>>>>> 626145ee6fd3eee7f60d1f2cd5125fab794c8f6e
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatMenuModule
=======
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
>>>>>>> 626145ee6fd3eee7f60d1f2cd5125fab794c8f6e
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
