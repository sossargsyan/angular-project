import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UserDetailComponent } from './components/user-list/user-detail/user-detail.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LeftMenuComponent } from './components/left-sidebar/left-menu/left-menu.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';
import { DeleteUserComponent } from './components/user-list/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    TopToolbarComponent,
    LeftSidebarComponent,
    AddUserComponent,
    LeftMenuComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  entryComponents: [
    AddUserComponent,
    DeleteUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
