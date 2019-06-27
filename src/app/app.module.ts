import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-list/user-item/user-item.component';
import { UserDetailComponent } from './components/user-list/user-detail/user-detail.component';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LeftMenuComponent } from './components/left-sidebar/left-menu/left-menu.component';
import { UsersService } from './services/users.service';

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
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';
import { DeleteUserComponent } from './components/user-list/delete-user/delete-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EditUserComponent } from './components/user-list/edit-user/edit-user.component';

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
    DeleteUserComponent,
    DashboardComponent,
    EditUserComponent
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
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  entryComponents: [
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
