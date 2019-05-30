import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UserDetailComponent } from './components/user-list/user-detail/user-detail.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    TopToolbarComponent,
    LeftSidebarComponent,
    AddUserComponent
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
    FormsModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule
  ],
  entryComponents: [
    AddUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
